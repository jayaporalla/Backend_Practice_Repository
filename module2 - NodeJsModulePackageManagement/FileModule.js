import fs from 'fs';
import path from 'path';

const data = "This is from FileModule data\n";

fs.writeFileSync("test.txt", data, { encoding: "utf-8" });

fs.appendFileSync("test.txt", "I have appended some data from file module", { encoding: "utf-8" });

fs.readFile("test.txt", "utf-8", (err, data) => {
    if(!err){
        console.log(data);
    }
});

fs.readdir("./module2 - NodeJsModulePackageManagement/", (err, data) => { //in order to read data from each file we can use foreach loop
    if(!err){
        console.log(data);
        data.forEach((file) => {
            const pathJoin = path.join("./module2 - NodeJsModulePackageManagement/", file);
            const output = fs.readFileSync(pathJoin, { encoding: "utf-8" });
            console.log(`------------------This is a each file output-----------------------`);
            console.log(output);
        })
    }
})