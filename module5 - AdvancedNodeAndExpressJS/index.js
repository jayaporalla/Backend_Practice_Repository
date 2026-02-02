import express from "express";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    console.log(req.baseUrl, req.url);
    return res.send("<h1>Hello</h1>");
})

app.get("/hello", (req, res, next) => {
    console.log(req.baseUrl, req.url);
    return res.send({ message: "Hey! what'up, how are you doing?" });
})

app.post("/somedata", (req, res, next) => {
    console.log(req.baseUrl, req.url);
    console.log(req.body);
    return res.send({ message: "Post data successfully" });
})

app.listen(5000, () => console.log(`Server started on 5000`));