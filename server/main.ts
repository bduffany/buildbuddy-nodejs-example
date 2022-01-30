import arg from "arg";
import express from "express";
import path from "path";

const app = express();

app.use((req, _, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../static/index.html"));
});

app.get("/app.js", (_, res) => {
  res.sendFile(path.join(__dirname, "../app/app_bundle/app.js"));
});

app.get("/*", express.static(path.join(__dirname, "../static/")));

const port = Number(process.env.PORT || 8082);
const hostname = process.env.HOSTNAME || "0.0.0.0";

const server = app.listen(port, hostname, () => {
  const addressInfo = server.address()!;
  const addrString = typeof addressInfo === "string" ? addressInfo : `${addressInfo.address}:${addressInfo.port}`;
  console.log(`Listening on http://${addrString}`);
});
