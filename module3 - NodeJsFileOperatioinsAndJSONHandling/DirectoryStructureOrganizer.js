const fs = require("fs");
const path = require("path");

const currentPath1 = path.join(__dirname, "20250211.jpg");
const destinationPath1 = path.join(__dirname, "images", "image.jpg");
const dirPath1 = path.join(__dirname, "images");

const currentPath = path.join(__dirname, "edprowise-invoice (2).pdf");
const destinationPath = path.join(__dirname, "pdf-files", "PDFFile.pdf");
const dirPath = path.join(__dirname, "pdf-files");

function manageFileStructure(currentPath, destinationPath, dirPath) {
    if(fs.existsSync(dirPath)) {
        if(fs.existsSync(destinationPath)){
            console.log('file already exsits');
        } else {
            fs.copyFile(currentPath, destinationPath, (err) => console.log("Error in destination path: ", err));
        }
    } else {
        fs.mkdir(dirPath, (err) => {
            if(err) throw err;
            fs.copyFile(currentPath, destinationPath, (err) => console.log("error in dirpath: ", err));
        })
    }
}

manageFileStructure(currentPath, destinationPath, dirPath);
manageFileStructure(currentPath1, destinationPath1, dirPath1);