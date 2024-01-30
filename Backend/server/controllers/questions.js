import mongoose from "mongoose";
import { questionsModel } from "../models/questions.js";
import { categoryModel } from "../models/category.js";

const isValidID = _id => (mongoose.Types.ObjectId.isValid(_id));

const isValidQuestion = (question) =>
{
    if(!question.name || !question.difficulty)
        return false;
    else
        return true;
}

export const postQuestion = async(req,res) =>
{
    try
    {
        const {cid} = req.params;
        if(!isValidID(cid))
            return res.status(404).send("Category not found");
        let category = await categoryModel.findById(cid);

        if(!isValidQuestion(req.body))
        {
            return res.status(404).send("Important parameters like name or difficulty missing");
        }
        const newQuestion = req.body;
        await questionsModel.create(newQuestion);

        category.questions.push(newQuestion);
        await category.save();

        res.status(200).json({newQuestion});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const getAllQuestions = async(req,res) =>
{
    try
    {
        const questions = questionsModel.find();
        res.status(200).json({questions});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const getQuestionByID = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID)
        {
            return res.status(404).send("Question doesn't exist");
        }
        const question = await questionsModel.findById(_id);
        res.status(200).json({question});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const revision = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID)
        {
            res.status(404).send("Question doesn't exist");
        }
        const question = await questionsModel.findById(_id);
        question.status = 1;
        await question.save();

        res.status(200).json({message: "Marked for review(1)", question});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const done = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID)
        {
            res.status(404).send("Question doesn't exist");
        }
        const question = await questionsModel.findById(_id);
        question.status = 2;
        await question.save();

        res.status(200).json({message: "Completed(2)", question});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const notDone = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID)
        {
            res.status(404).send("Question doesn't exist");
        }
        const question = await questionsModel.findById(_id);
        question.status = 0;
        await question.save();

        res.status(200).json({message: "Not Completed(0)", question});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}