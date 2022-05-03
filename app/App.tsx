import React from "react";
import * as greeting_grpc from "../proto/greeting_js_proto_pb/proto/greeting_grpc_web_pb";
import * as greeting from "../proto/greeting_js_proto_pb/proto/greeting_pb";

const greetingClient = new greeting_grpc.GreetingPromiseClient("");

export default function App() {
  const [response, setResponse] = React.useState<greeting.GetGreetingResponse | null>(null);

  React.useEffect(() => {
    greetingClient.getGreeting(new greeting.GetGreetingRequest()).then(setResponse);
  }, []);

  return <div>{response?.getGreeting() || "Loading..."}</div>;
}
