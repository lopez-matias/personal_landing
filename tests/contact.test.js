import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/contact.js";

function responseMock() {
  return {
    statusCode: null,
    headers: {},
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers[name] = value;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
}

test("contact endpoint rejects unsupported methods", async () => {
  const response = responseMock();
  await handler({ method: "GET" }, response);
  assert.equal(response.statusCode, 405);
  assert.equal(response.body.message, "method_not_allowed");
});

test("contact endpoint validates required fields", async () => {
  const response = responseMock();
  await handler({ method: "POST", body: {} }, response);
  assert.equal(response.statusCode, 422);
  assert.equal(response.body.message, "validation_error");
});

test("contact endpoint preserves development fallback without an API key", async () => {
  const previousKey = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  const response = responseMock();
  await handler(
    {
      method: "POST",
      body: {
        name: "Test User",
        email: "test@example.com",
        message: "This is a valid local contact form test message.",
        sourcePath: "/",
      },
    },
    response,
  );
  if (previousKey) process.env.RESEND_API_KEY = previousKey;
  assert.equal(response.statusCode, 200);
  assert.equal(response.body.emailSent, false);
  assert.equal(response.body.mode, "development");
  assert.equal(response.body.received, undefined);
});

test("contact endpoint silently rejects honeypot submissions", async () => {
  const response = responseMock();
  await handler(
    {
      method: "POST",
      body: {
        name: "Spam Bot",
        email: "bot@example.com",
        message: "This message should never be delivered by the endpoint.",
        website: "https://spam.example.com",
      },
    },
    response,
  );
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, { ok: true, emailSent: true });
});

test("contact endpoint limits repeated requests from one address", async () => {
  const request = {
    method: "POST",
    headers: { "x-forwarded-for": "203.0.113.15" },
    body: {},
  };

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = responseMock();
    await handler(request, response);
    assert.equal(response.statusCode, 422);
  }

  const response = responseMock();
  await handler(request, response);
  assert.equal(response.statusCode, 429);
  assert.equal(response.body.message, "rate_limited");
  assert.equal(response.headers["retry-after"], "600");
});
