import { TestServer, runTestServer } from "../../../server/testing/test_server";

describe("initial html response", () => {
  let server: TestServer;
  beforeEach(async () => (server = await runTestServer()));
  afterEach(() => server?.shutDown());

  it("should contain the script that serves the app", async () => {
    const response = await server.get("/");
    const bodyText = await response.text();

    expect(response.status).toBe(200);
    expect(bodyText).toContain(`<script src="/app.js"></script>`);
  });
});
