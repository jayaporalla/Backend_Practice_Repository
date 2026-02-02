const net = require("net");
const fs = require("fs");

const client = net.createConnection({ port: 8080}, () => {
    console.log("Connected to server");

    const write = fs.createWriteStream("recieved.txt");
    client.pipe(write);

    client.on("end", () => {
        console.log("File data received, connection closed");
    })
})