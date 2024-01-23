import mongoose from "mongoose";

const questionsSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        difficulty:
        {
            type: Number,
            required: true
        },
        solution:
        {
            type: [String]
        },
        notes:
        {
            type: String
        },
        status:
        {
            type: Number
        }
    }
);

export const questionsModel = mongoose.model("Questions Schema", questionsSchema);