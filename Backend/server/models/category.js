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
            type: [String]
        },
        notes:
        {
            type: String
        },
        completion:
        {
            type: Number,
            default: 0
        },
        questions:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: questionsModel
        }
    }
);

export const categoryModel = mongoose.model("Category Schema" ,categorySchema);