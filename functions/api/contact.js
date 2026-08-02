const required = ["name", "email", "projectType", "message"];

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

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

async function sendWithResend(env, payload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
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

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    payload = await request.json();
  } catch (error) {
    return json({ ok: false, message: "invalid_json" }, 400);
  }

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
    return json({ ok: false, message: "validation_error", errors }, 422);
  }

  const hasResend = Boolean(env.RESEND_API_KEY && env.CONTACT_FROM_EMAIL && env.CONTACT_TO_EMAIL);
  if (!hasResend) {
    return json({
      ok: true,
      emailSent: false,
      mode: "development",
      message: "email_provider_not_configured",
      received: normalized
    });
  }

  try {
    await sendWithResend(env, normalized);
    return json({ ok: true, emailSent: true });
  } catch (error) {
    console.error(error);
    return json({ ok: false, message: "email_send_failed" }, 502);
  }
}

export async function onRequestGet() {
  return json({ ok: false, message: "method_not_allowed" }, 405);
}
