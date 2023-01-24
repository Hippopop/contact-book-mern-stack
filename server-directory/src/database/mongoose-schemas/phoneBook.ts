import mongoose, { Schema } from "mongoose";

const ContactRecord =
    new Schema({
        category: String,
        contacts: [
            {
                name: String,
                description: String,
                number: String,
            }
        ],
    });

const ContactRecordModel = mongoose.model("ContactRecord", ContactRecord);
export { ContactRecordModel };