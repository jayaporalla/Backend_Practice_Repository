import express from 'express';
import path from 'path';

const app = express();
const filePath = path.join(process.cwd(), "public", "index.html");
const file1Path = path.join(process.cwd(), "public", "about.html");
const dirPath = path.join(process.cwd(), "public");

//#region middleware
app.use(express.static(dirPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

app.get('/', (req, res, next) => {
    // return res.render(filePath);
    return res.sendFile(filePath); // works fine by commenting express.static but not work if we want to work with static files.
})

// Note:- here If we want to load more than one index file definitely we have to use sendFile render will not work
// if we have single page we can use render but if we have more than one have to go with sendFile.

app.get('/about', (req, res, next) => {
    // return res.render(file1Path);
    return res.sendFile(file1Path); // works fine by commenting express.static but not work if we want to work with static files.
})

app.listen(5000, () => console.log(`Server started on 5000`));