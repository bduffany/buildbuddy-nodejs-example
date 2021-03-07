import child_process from "child_process";
import fetch from "isomorphic-fetch";

const runfiles = require(process.env["BAZEL_NODE_RUNFILES_HELPER"]);

/** TestServer is an instance of the server binary for use in a single test case. */
export type TestServer = {
  /** The port that the server instance is listening to. */
  readonly port: number;
  /** Utility function to get a resource from the server by URL path. */
  get(path?: string): ReturnType<typeof fetch>;
  /** Shuts down the test server instance. */
  shutDown(): Promise<void>;
};

/** Starts a test server and returns the server instance. */
export async function runTestServer(): Promise<TestServer> {
  const serverPath = runfiles.resolveWorkspaceRelative("server/main.sh");

  // Note, PORT=0 tells express to create a server on a random free port.
  //
  // We scan the server's output for the "Listening on..." message to see the
  // actual port that it chose.
  //
  // This approach is preferable to choosing a random free port on our side,
  // because the port may become occupied by the time the server starts.
  const serverProcess = child_process.spawn(serverPath, {
    env: { ...process.env, PORT: "0" },
    cwd: process.env.RUNFILES,
  });

  return new Promise((accept) => {
    let exited = false;
    serverProcess.on("exit", () => (exited = true));

    // TODO: Output server logs to a file that can be viewed in BuildBuddy.

    serverProcess.stdout.on("data", (data: Buffer) => {
      const output = data.toString();
      const match = output.match(/Listening on .*?:(\d+)/);
      if (!match) return;

      const port = Number(match[1]);

      accept({
        port,
        get: (path: string = "/") => {
          if (!path.startsWith("/")) path = `/${path}`;
          return fetch(`http://localhost:${port}${path}`);
        },
        shutDown: () => {
          if (exited) return;

          return new Promise((accept) => {
            serverProcess.on("exit", accept);
            serverProcess.kill("SIGINT");
          });
        },
      });
    });
  });
}
