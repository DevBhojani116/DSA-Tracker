import mongoose from "mongoose";
import { questionsModel } from "./questions.js";

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
            type: //array of questions
            [
                // mongoose.Schema.Types.ObjectId
                // {
                //     name: String,
                //     difficulty: Number, //0-easy, 1-medium, 2-hard
                //     solution: [String], //an array of links
                //     notes: String,
                //     status: Number //0-not done, 1-marked for review, 2-completed
                // }
                {
                    name:
                    {
                        type: String,
                        required: true
                    },
                    difficulty:
                    {
                        type: Number, //0-easy, 1-medium, 2-hard
                        required: true
                    },
                    solution:
                    {
                        type: [String] //an array of links
                    },
                    notes:
                    {
                        type: String
                    },
                    status:
                    {
                        type: Number,
                        default: 0
                        //0-not done
                        //1-marked for review
                        //2-completed
                    }
                }
            ]
            // ,ref: questionsModel
        }
    }
);

export const categoryModel = mongoose.model("Category Schema" ,categorySchema);