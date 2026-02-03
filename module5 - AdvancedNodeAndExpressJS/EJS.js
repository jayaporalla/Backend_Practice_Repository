import express from 'express';
import path from 'path';

const app = express();
const publicPath = path.join(process.cwd(), "public");
const viewsPath = path.join(process.cwd(), "views");

//#region middleware
app.set("view engine", "ejs");
app.set("views", viewsPath);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

app.get("/", (req, res) => {
    return res.render("index", { title: "EJS", name: "Jayasri" })
})

app.get("/about", (req, res) => {
    return res.render("about", { title: "About Page", name: "Jayasri" })
})

app.listen(5000, () => console.log(`Server started on 5000`));