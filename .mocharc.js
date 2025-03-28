module.exports = {
  require: [
    "ts-node/register", // ✅ Enables TypeScript support
    "source-map-support/register" // ✅ Improves error stack traces
  ],
  extension: ["ts"], // ✅ Ensures Mocha runs `.ts` test files
  spec: "tests/**/*.spec.ts", // ✅ Path to your test files
  reporter: "spec", // ✅ Default Mocha reporter
  timeout: 5000, // ✅ Set test timeout (adjust as needed)
  exit: true // ✅ Ensures Mocha exits after tests complete
};
