import { Console } from 'console';
import { createWriteStream } from 'fs';

const writeStream = createWriteStream('WriteStreamConsole.js');
const logger = new Console(writeStream, process.stderr);

logger.time("Time");
logger.log("Hello");
logger.timeEnd("Time");

// we have various methods in console to display output, error, time everything.
console.time("Time");
console.log("Time");
console.error("Oops");
console.count("Count");
console.count("red");
console.table({name: "Jayasri", age: 25});
console.count("Count");
console.count("Count");
console.count("Count");
console.timeEnd("Time");