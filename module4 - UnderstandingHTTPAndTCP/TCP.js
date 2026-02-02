const net = require("net");
const fs = require("fs");

// const server = net.createServer((socket) => {
//     socket.on("data", (data) => {
//         console.log("Data received on TCP", data.toString());
//     })
//     socket.on("end", () => console.log("TCP Connection ended"));
// })

// server.listen(8080, () => console.log("TCP Server open on 8080"));
// in order to start the server use command as - telnet localhost server(port)

// second example
const server = net.createServer((socket) => {
    console.log("Client Connected");

    const file = fs.createReadStream("data.txt");
    file.pipe(socket);

    socket.on("end", () => console.log("Client Disconnected"));
})

server.listen(8080, () => console.log("Server started on 8080"));
