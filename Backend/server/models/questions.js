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
);

export const questionsModel = mongoose.model("Questions Schema", questionsSchema);