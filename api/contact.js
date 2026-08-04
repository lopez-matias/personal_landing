import { Resend } from "resend";

const required = ["name", "email", "projectType", "message"];
const defaultFromEmail = "MatuDev <contacto@matudev.com>";
const defaultToEmail = "lopeznunezmati@gmail.com";

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

function clean(value, max = 2000) {
  return String(value || "").trim().slice(0, max);
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
    `Empresa: ${payload.company || "No indicada"}`,
    `Tipo de proyecto: ${payload.projectType}`,
    `Ruta: ${payload.sourcePath || "No indicada"}`,
    "",
    "Mensaje:",
    payload.message
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
    <p><strong>Empresa:</strong> ${escapeHtml(payload.company || "No indicada")}</p>
    <p><strong>Tipo de proyecto:</strong> ${escapeHtml(payload.projectType)}</p>
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

async function sendWithResend(payload) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || defaultFromEmail,
    to: [process.env.CONTACT_TO_EMAIL || defaultToEmail],
    replyTo: payload.email,
    subject: `MATUDEV Contacto: ${payload.projectType}`,
    html: buildHtml(payload),
    text: buildText(payload)
  });

  if (error) throw new Error(`resend_error:${JSON.stringify(error).slice(0, 180)}`);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return sendJson(response, 405, { ok: false, message: "method_not_allowed" });
  }

  const payload = request.body || {};
  const normalized = {
    name: clean(payload.name, 160),
    email: clean(payload.email, 220),
    company: clean(payload.company, 220),
    projectType: clean(payload.projectType, 160),
    message: clean(payload.message, 4000),
    sourcePath: clean(payload.sourcePath, 220),
    startedAt: clean(payload.startedAt, 80)
  };

  const errors = validate(normalized);
  if (Object.keys(errors).length) {
    return sendJson(response, 422, { ok: false, message: "validation_error", errors });
  }

  const hasResend = Boolean(process.env.RESEND_API_KEY);
  if (!hasResend) {
    return sendJson(response, 200, {
      ok: true,
      emailSent: false,
      mode: "development",
      message: "email_provider_not_configured",
      received: normalized
    });
  }

  try {
    await sendWithResend(normalized);
    return sendJson(response, 200, { ok: true, emailSent: true });
  } catch (error) {
    console.error(error);
    return sendJson(response, 502, { ok: false, message: "email_send_failed" });
  }
}
