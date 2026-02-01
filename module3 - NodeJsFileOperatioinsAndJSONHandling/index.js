const { getDataOperations, insertDataOperations, updateDataOperations, deleteDataOperations } = require("./DataOperations");

const userData = { id: crypto.randomUUID(), name: "Jayasri" };
const userData1 = { id: crypto.randomUUID(), name: "Satyanarayana" };

insertDataOperations(userData).
    then((data) => console.log("user added with id: ", data))
    .catch((err) => console.log("error occured: ", err));

insertDataOperations(userData1).
    then((data) => console.log("user added with id: ", data))
    .catch((err) => console.log("error occured: ", err));

const data1 = { id: "72869ad5-0a93-444b-a097-8b89999b787f" , name: "Jayasri Poralla"}
updateDataOperations(data1).
    then((data) => console.log("Updated data successfully", data))
    .catch((err) => console.log("error occured", err));

deleteDataOperations("72869ad5-0a93-444b-a097-8b89999b787f").
    then((data) => console.log("Deleted successfully", data))
    .catch((err) => console.log("Error occured", err));

getDataOperations().
    then((data) => console.log(data)) 
    // then((data) => console.log(data.users.length)) 
    .catch((err) => console.log(err));