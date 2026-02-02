export const getMiddleware = (req, res, next) => {
    const data = req.body;
    if(data && data.task && data.dueDate){
        console.log("Data is valid, moving to next middleware check!");
        return next();
    } else {
        console.log("Data is not valid, cannot move further");
        return res.status(422).json({ message: "Input data is not valid" });
    }
}