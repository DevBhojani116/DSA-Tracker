import mongoose from "mongoose";
import { questionsModel } from "./questions";

const categorySchema = mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: true
        },
        resources:
        {
            type: [String] //arrays of links
        },
        notes:
        {
            type: String
        },
        completion:
        {
            type: Number, //completion percentage
            default: 0
        },
        questions:
        {
            type: [mongoose.Schema.Types.ObjectId], //refers to array of questions
            ref: questionsModel
        }
    }
);

export const categoryModel = mongoose.model("Category Schema" ,categorySchema);