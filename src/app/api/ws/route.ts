export function SOCKET(
  client: import("ws").WebSocket,
  request: import("http").IncomingMessage,
  server: import("ws").WebSocketServer
) {
  // console.log("A client connected!");

  client.on("message", async (payload) => {
    const dates = payload.toString();
    console.log(dates);
    const event = JSON.parse(dates);
    console.log(event);

    if (event.type == "startStream") {
      console.log(event.data);

      server.clients.forEach((receiver) => {
        console.log(receiver);

        if (receiver === client) return;

        if (receiver != client && receiver.readyState === receiver.OPEN) {
          receiver.send(
            JSON.stringify({ type: "newStream", data: event.data })
          );
        }
      });
    }
  });

  client.on("close", () => {
    console.log("A client disconnected!");
  });
}
