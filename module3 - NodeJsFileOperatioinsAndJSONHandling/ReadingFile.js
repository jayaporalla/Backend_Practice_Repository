const fs = require("fs");

const readStream = fs.createReadStream("data.txt", { highWaterMark: 1024, encoding: "utf-8" }) // 1 kb = 1024 bytes
let sumOfChunks = 0;

readStream.on("data", (chunk) => {
    sumOfChunks++;
    console.log("Chunk of data of 1kb: ", chunk);
})

setTimeout(() => {
    console.log("The sumOfChunks is:", sumOfChunks)
}, 4000);