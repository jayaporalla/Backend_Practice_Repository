const fs = require("fs/promises");
// const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

// const getDataOperations = () => {
//     return new Promise((reslove, reject) => {
//         fs.readFile(filePath, { encoding: "utf-8" } , (err, data) => {
//             if(err){
//                 console.log("Error Occured", filePath);
//                 return reject(err);
//             } 
//             console.log("Data retrieved successfully");
//             reslove(JSON.parse(data)); // parsed the object so can access properties.
//         })
//     })
// }

const getDataOperations = async () => {
    try{
        const fileDate = await fs.readFile(filePath, { encoding: "utf-8" });
        const converted = JSON.parse(fileDate);
        return converted;
    }catch(err){
        console.log("Error occured during get operation: ", err);
        throw err;
    }
}

// const insertDataOperations = (userData) => {
//     return new Promise(async (resolve, reject) => {
//         const fileData = await getDataOperations();
//         fileData.users.push(userData);
//         fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
//             if(err){
//                 console.log("unable to insert data");
//                 return reject(err);
//             }
//             return resolve(userData.id);
//         });
//     })
// }

const insertDataOperations = async (userData) => {
    try {
        const fileData = await getDataOperations();
        fileData.users.push(userData);
        await fs.writeFile(filePath, JSON.stringify(fileData));
        return userData.id;
    } catch (error) {
        console.log("unable to insert data", error);
        throw error;
    }
}

// const updateDataOperations = (userData) => {
//     return new Promise(async (resolve, reject) => {
//         const fileData = await getDataOperations();
//         const user = fileData.users.find((obj) => obj.id === userData.id);
//         user.name = userData.name;

//         fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
//             if(err){
//                 console.log("unable to update data");
//                 return reject(err);
//             }
//             return resolve(userData.name);
//         });
//     })
// }

const updateDataOperations = async (userData) => {
    try {
        const fileData = await getDataOperations();
        const user = fileData.users.find((obj) => obj.id === userData.id);
        user.name = userData.name;
        await fs.writeFile(filePath, JSON.stringify(fileData));
        return userData.name;
    } catch (error) {
        console.log("unable to update data: ", error);
        throw error;
    }
}

// const deleteDataOperations = (id) => {
//     return new Promise(async (resolve, reject) => {
//         const fileData = await getDataOperations();
//         const user = fileData.users.filter((obj) => obj.id !== id);
//         fileData.users = user;
//         fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
//             if(err){
//                 console.log("unable to delete data");
//                 return reject(err);
//             }
//             return resolve(id);
//         });
//     })
// }

const deleteDataOperations = async (id) => {
    try {
        const fileData = await getDataOperations();
        const user = fileData.users.filter((obj) => obj.id !== id);
        fileData.users = user;
        await fs.writeFile(filePath, JSON.stringify(fileData));
        return id;
    } catch (error) {
        console.log("unable to delete data", error);
        throw error;
    }
}

exports.getDataOperations = getDataOperations;
exports.insertDataOperations = insertDataOperations;
exports.updateDataOperations = updateDataOperations;
exports.deleteDataOperations = deleteDataOperations;