import express, { Request, Response } from "express";
import { ContactRecordModel } from "../database/mongoose-schemas/phoneBook";


export const contactCategoryRoutes = express.Router();

contactCategoryRoutes.get('/all_category', async (req: Request, res: Response) => {
    const allCategories = await ContactRecordModel.find();
    res.status(200).json(allCategories);
});

contactCategoryRoutes.post('/add_category', async (req: Request, res: Response) => {
    const { category } = req.body;
    const newContact = new ContactRecordModel({
        category: category,
    });
    await newContact.save();
    res.status(200).json(newContact);
});

contactCategoryRoutes.delete('/delete_category', async (req: Request, res: Response) => {
    const { categoryId } = req.body;
    const deletedContact = await ContactRecordModel.findByIdAndDelete(categoryId);
    res.status(200).json(deletedContact);
});

