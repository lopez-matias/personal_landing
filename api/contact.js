const required = ["name", "email", "projectType", "message"];

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

function sendJson(response, status, data) {
  response.status(status).setHeader("cache-control", "no-store");
  response.json(data);
}

async function sendWithResend(payload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: payload.email,
      subject: `Nueva consulta MatuDev: ${payload.projectType}`,
      text: buildText(payload)
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`resend_error:${response.status}:${text.slice(0, 180)}`);
  }
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

  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_TO_EMAIL);
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
