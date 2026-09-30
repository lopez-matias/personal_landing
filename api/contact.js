import { Resend } from "resend";

const required = ["name", "email", "message"];
const defaultFromEmail = "MatuDev <contacto@matudev.com>";
const defaultToEmail = "lopeznunezmati@gmail.com";
const rateWindowMs = 10 * 60 * 1000;
const rateLimit = 5;
const rateStore = globalThis.__matudevContactRateStore || new Map();
globalThis.__matudevContactRateStore = rateStore;

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

function clean(value, max = 2000) {
  return String(value || "")
    .trim()
    .slice(0, max);
}

function validate(payload) {
  const errors = {};
  required.forEach((field) => {
    if (!clean(payload[field])) errors[field] = "required";
  });
  if (payload.email && !isEmail(payload.email)) errors.email = "invalid_email";
  if (clean(payload.message).length < 20) errors.message = "too_short";
  return errors;
}

function buildText(payload) {
  return [
    "Nueva consulta desde MatuDev",
    "",
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    `Ruta: ${payload.sourcePath || "No indicada"}`,
    "",
    "Mensaje:",
    payload.message,
  ].join("\n");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtml(payload) {
  return `
    <h2>Nueva consulta desde MatuDev</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Ruta:</strong> ${escapeHtml(payload.sourcePath || "No indicada")}</p>
    <hr>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll("\n", "<br>")}</p>
  `;
}

function sendJson(response, status, data) {
  response.status(status).setHeader("cache-control", "no-store");
  response.json(data);
}

function clientIp(request) {
  const forwarded = request.headers?.["x-forwarded-for"];
  return String(Array.isArray(forwarded) ? forwarded[0] : forwarded || "")
    .split(",")[0]
    .trim();
}

function rateLimitRequest(request, response) {
  const ip = clientIp(request);
  if (!ip) return false;

  const now = Date.now();
  const attempts = (rateStore.get(ip) || []).filter(
    (timestamp) => now - timestamp < rateWindowMs,
  );
  if (attempts.length >= rateLimit) {
    response.setHeader("retry-after", String(Math.ceil(rateWindowMs / 1000)));
    sendJson(response, 429, { ok: false, message: "rate_limited" });
    return true;
  }

  attempts.push(now);
  rateStore.set(ip, attempts);
  return false;
}

async function sendWithResend(payload) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || defaultFromEmail,
    to: [process.env.CONTACT_TO_EMAIL || defaultToEmail],
    replyTo: payload.email,
    subject: `MATUDEV Contacto: ${payload.name}`,
    html: buildHtml(payload),
    text: buildText(payload),
  });

  if (error)
    throw new Error(`resend_error:${JSON.stringify(error).slice(0, 180)}`);
}

export default async function handler(request, response) {
  const startedAt = Date.now();
  const requestId = request.headers?.["x-vercel-id"] || "local";
  const finish = (status, data) => {
    console.log(
      JSON.stringify({
        level: "info",
        message: "contact_request_completed",
        requestId,
        status,
        durationMs: Date.now() - startedAt,
      }),
    );
    return sendJson(response, status, data);
  };

  console.log(
    JSON.stringify({
      level: "info",
      message: "contact_request_started",
      requestId,
      method: request.method,
    }),
  );

  if (request.method !== "POST") {
    response.setHeader("allow", "POST");
    return finish(405, {
      ok: false,
      message: "method_not_allowed",
    });
  }

  if (rateLimitRequest(request, response)) {
    console.warn(
      JSON.stringify({
        level: "warn",
        message: "contact_request_rate_limited",
        requestId,
        durationMs: Date.now() - startedAt,
      }),
    );
    return;
  }

  const payload = request.body || {};
  const normalized = {
    name: clean(payload.name, 160),
    email: clean(payload.email, 220),
    message: clean(payload.message, 4000),
    website: clean(payload.website, 200),
    sourcePath: clean(payload.sourcePath, 220),
  };

  if (normalized.website) {
    return finish(200, { ok: true, emailSent: true });
  }

  const errors = validate(normalized);
  if (Object.keys(errors).length) {
    return finish(422, {
      ok: false,
      message: "validation_error",
      errors,
    });
  }

  const hasResend = Boolean(process.env.RESEND_API_KEY);
  if (!hasResend) {
    return finish(200, {
      ok: true,
      emailSent: false,
      mode: "development",
      message: "email_provider_not_configured",
    });
  }

  try {
    await sendWithResend(normalized);
    return finish(200, { ok: true, emailSent: true });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        message: "contact_email_failed",
        requestId,
        error: error instanceof Error ? error.message : String(error),
        durationMs: Date.now() - startedAt,
      }),
    );
    return sendJson(response, 502, {
      ok: false,
      message: "email_send_failed",
    });
  }
}
