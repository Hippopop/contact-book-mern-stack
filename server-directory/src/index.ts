import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import * as dotenv from 'dotenv';
import { ContactRecordModel } from './database/mongoose-schemas/phoneBook';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.post('/new_contact_category', async function (req: Request, res: Response) {

    const { category } = req.body;
    const newContact = new ContactRecordModel({
        category: category,
    });

    await newContact.save();
    res.status(200).json(newContact);
});

app.get('/all_contact_categories', async (req: Request, res: Response) => {
    const allCategories = await ContactRecordModel.find();
    res.json(allCategories);
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL!, () => {
    console.log(`Connected! --> PORT is ${PORT}`);
    console.log(`Running on http://localhost:${PORT}`);
    app.listen(PORT);
});


