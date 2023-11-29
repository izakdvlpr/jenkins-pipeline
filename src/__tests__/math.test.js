const assert = require("node:assert");
const test = require("node:test");

test("add", () => {
  assert.strictEqual(2 + 2, 4);
});

test("multiply", () => {
  assert.strictEqual(2 * 2, 4);
});