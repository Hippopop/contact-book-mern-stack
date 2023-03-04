import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import * as dotenv from 'dotenv';
import { contactCategoryRoutes } from './routes/contactCategoryRoutes';
import { contactRoute } from './routes/contactRoutes';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
})

app.use("/contact_category", contactCategoryRoutes);
app.use("/contact", contactRoute);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL!, () => {
    console.log(`Connected! --> PORT is ${PORT}`);
    console.log(`Running on http://localhost:${PORT}`);
    app.listen(PORT);
});


