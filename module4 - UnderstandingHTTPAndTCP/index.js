const http = require("http");
const qs = require("querystring");

let users = [
    { id: 1, name: "Jayasri" },
    { id: 2, name: "Chinni" },
    { id: 3, name: "Adarsh" }
]

const sever = http.createServer((req, res) => {
    if(req.method === "GET"){
        console.log(req.url);
        if(req.url.includes("?")){
            // const search = new URLSearchParams(req.url);
            // const id = search.get("id");
            const search = qs.decode(req.url);
            const id = search.id;
            const user = users.find((u) => u.id === +id);
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ user }));
            return res.end();
        }
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ users }));
        return res.end();
    } else if(req.method === "POST"){
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        })
        req.on("end", () => {
            try {
                data = JSON.parse(data);
                // throw new Error("Parsing failed");
                console.log(data);
                if(!data || !data.name){
                    console.log(data.name);
                    res.setHeader("Content-Type", "application/json");
                    res.statusCode = 422;
                    res.write(JSON.stringify({ message: "Invalid data" }));
                    return res.end();
                }
                const user = {id: Date.now(), name: data.name};
                users.push(user);
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 201;
                res.write(JSON.stringify({ user }));
                return res.end();
            } catch (error) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 500;
                res.write(JSON.stringify({ message: "Something went wrong, Try again later" }));
                return res.end();
            }
        })
    } else if(req.method === "PUT"){
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        })
        req.on("end", () => {
            try {
                data = JSON.parse(data);
                console.log(data);
                if(!data || !data.name || !data.id){
                    res.setHeader("Content-Type", "application/json");
                    res.statusCode = 422;
                    res.write(JSON.stringify({ message: "Invalid data" }));
                    return res.end();
                }
                const user = users.find((obj) => obj.id === data.id);
                user.name = data.name;
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 201;
                res.write(JSON.stringify({ user }));
                return res.end();
            } catch (error) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 500;
                res.write(JSON.stringify({ message: "Something went wrong, Try again later" }));
                return res.end();
            }
        })
    } else if(req.method === "DELETE"){
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        })
        req.on("end", () => {
            try {
                data = JSON.parse(data);
                console.log(data);
                if(!data || !data.id){
                    res.setHeader("Content-Type", "application/json");
                    res.statusCode = 422;
                    res.write(JSON.stringify({ message: "Invalid data" }));
                    return res.end();
                }
                users = users.filter((obj) => obj.id !== data.id);
                res.setHeader("Content-Type", "application/json");
                res.write(JSON.stringify({ message: "Successfully Deleted" }));
                return res.end();
            } catch (error) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 500;
                res.write(JSON.stringify({ message: "Something went wrong, Try again later" }));
                return res.end();
            }
        })
    } 
})

sever.listen(80, () => console.log(`Server started on 80`));