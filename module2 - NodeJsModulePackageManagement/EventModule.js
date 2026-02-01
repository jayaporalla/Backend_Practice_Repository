import EventEmitter from "./EventEmitter.js";

const event = EventEmitter.getEventEmitter();

const data = (message) => {
    console.log("Message received", message);
}

const store = (message) => {
    console.log("Message store to DB", message);
}

event.on("newMessage", data);
event.on("newMessage", store); // here event started and stored and message display
// In Node js backend it works on single threaded, non-blocking, event loop. and works on callback.
// calling multiple callbacks it leads to callback hell in order to avoid this will use async and await (best), promise
// after exceuting it will print message.
event.emit("newMessage", { message: "Hello" });