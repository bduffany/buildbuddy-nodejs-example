import { TestServer, runTestServer } from "../../../server/testing/test_server";

describe("initial html response", () => {
  let server: TestServer;
  afterEach(() => {
    server?.shutDown();
    server = null;
  });

  it("should contain the script that serves the app", async () => {
    server = await runTestServer();
    const response = await server.get("/");
    const bodyText = await response.text();

    expect(response.status).toBe(200);
    expect(bodyText).toContain(`<script async src="/app.js"></script>`);
  });
});
