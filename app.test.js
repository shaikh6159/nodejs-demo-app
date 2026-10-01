const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('GET / returns greeting', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/`);
  const text = await res.text();
  server.close();
  assert.strictEqual(res.status, 200);
  assert.match(text, /Hello from my CI\/CD pipeline/);
});

test('GET /health returns ok', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/health`);
  const body = await res.json();
  server.close();
  assert.strictEqual(res.status, 200);
  assert.strictEqual(body.status, 'ok');
});
