import chalk from "chalk";
import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import * as greeting from "../proto/greeting_node_proto_pb/proto/greeting_pb";
import * as greeting_grpc from "../proto/greeting_node_proto_pb/proto/greeting_grpc_pb";

function log(...args: any[]) {
  console.info(chalk.gray(new Date().toISOString()), ...args);
}

async function readFileUTF8(path: string): Promise<string> {
  return new Promise((accept, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => (err ? reject(err) : accept(data)));
  });
}

const app = express();

app.use((req, _, next) => {
  log(req.method, req.path);
  next();
});

app.get("/static/app.js", (_, res) => {
  res.sendFile(path.join(__dirname, "../app/app_bundle/index.js"));
});

app.get("/static/app.js.map", (_, res) => {
  res.sendFile(path.join(__dirname, "../app/app_bundle/index.js.map"));
});

if (process.env.NODE_ENV === "development") {
  if (process.env["IBAZEL_LIVERELOAD_URL"]) {
    // CORS is needed to serve the ibazel livereload script.
    // It can't be served by proxy, since it depends on connecting
    // directly to ibazel server.
    const { origin } = new URL(process.env["IBAZEL_LIVERELOAD_URL"]);
    app.use(cors({ origin }));
  }
}

app.get("/static/*", express.static(path.join(__dirname, "../static/")));

app.get("/*", async (_, res) => {
  let html = await readFileUTF8(path.join(__dirname, "../static/index.html"));
  let liveReloadScriptHTML = "";
  if (process.env.NODE_ENV === "development") {
    liveReloadScriptHTML = `<script src="${process.env["IBAZEL_LIVERELOAD_URL"]}"></script>`;
  }
  html = html.replace('<script id="live-reload"></script>', liveReloadScriptHTML);
  res.send(html);
});

app.post(greeting_grpc.GreetingService.getGreeting.path, (_, res) => {
  const response = new greeting.GetGreetingResponse();
  response.setGreeting("Hello world!");
  res.setHeader("Content-Type", "application/grpc-web");
  res.write(greeting_grpc.GreetingService.getGreeting.responseSerialize(response), "binary");
  res.end(null, "binary");
});

const port = Number(process.env.PORT || 8082);
const hostname = process.env.HOSTNAME || "0.0.0.0";

const server = app.listen(port, hostname, () => {
  const addressInfo = server.address()!;
  const addrString = typeof addressInfo === "string" ? addressInfo : `${addressInfo.address}:${addressInfo.port}`;
  log(`Listening on ${addrString}`);
  log(chalk.green(`You can now visit the app at http://localhost:${port}`));
});
