import express, { Request, Response } from "express";
import { ContactRecordModel } from "../database/mongoose-schemas/phoneBook";


export const contactRoute = express.Router();

contactRoute.get(
    '/:categoryId',
    async (req: Request, res: Response) => {
        const { categoryId } = req.params;
        const category = await ContactRecordModel.findById(categoryId);
        res.json(category);
    });

contactRoute.get(
    'change_title/:categoryId',
    async (req: Request, res: Response) => {
        const { categoryId } = req.params;
        const category = await ContactRecordModel.findById(categoryId);
        res.json(category);
    });