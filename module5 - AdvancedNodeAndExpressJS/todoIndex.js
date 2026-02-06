import express from 'express';
import todoRouter from './Routes/todoRoute.js';

const app = express();

//#region middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

app.use("/api/v1", todoRouter);

app.listen(3000, () => console.log(`Server started on 3000`));