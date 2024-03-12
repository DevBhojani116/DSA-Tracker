import mongoose from "mongoose";
// import { questionsModel } from "../models/questions.js";
import { categoryModel } from "../models/category.js";

const isValidID = _id => (mongoose.Types.ObjectId.isValid(_id));

const isValidQuestion = (question) =>
{
    if(!question.name || !question.difficulty || !question.link)
        return false;
    else
        return true;
}

const completionPercent = async(cid) =>
{
    const category = await categoryModel.findById(cid);
    const n = category.questions.length;
    let numberOfQuestionsSolved = category.questions.filter(
        (question) =>
        {
            if(question.status == 2)
                return question;
        }
    ).length;
    return (numberOfQuestionsSolved*100/n);
}

export const postQuestion = async(req,res) =>
{
    try
    {
        const {cid} = req.params;
        if(!isValidID(cid))
            return res.status(404).send("Category not found");
        let category = await categoryModel.findById(cid);

        const newQuestions = req.body;
        for(let i = 0; i<newQuestions.length; i++)
        {
            if(isValidQuestion(newQuestions[i]))
            {
                return res.status(404).send("Important parameters like name or difficulty or link to the question missing");
            }
            category.questions.push(newQuestions[i]);
            await category.save();
        }
        
        // category.questions.push(newQuestions);
        // await category.save();

        category.completion = await completionPercent(cid);
        await category.save();

        res.status(200).json({newQuestions});
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
        const {cid} = req.params;
        if(!isValidID(cid))
            return res.status(404).send("Category not found");
        let category = await categoryModel.findById(cid);

        const questions = category.questions;
        res.status(200).json({questions});
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
        const {cid,qid} = req.params;
        if(!isValidID(cid))
            return res.status(404).send("Category not found");
        let category = await categoryModel.findById(cid);

        // const {qid} = req.params;
        if(!isValidID(qid))
        {
            return res.status(404).send("Question doesn't exist");
        }
        let question = category.questions.id(qid);
        // const question = await questionsModel.findById(_id);
        question.status = 1;
        await category.save();

        category.completion = await completionPercent(cid);
        await category.save();

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
        const {cid,qid} = req.params;
        if(!isValidID(cid))
            return res.status(404).send("Category not found");
        let category = await categoryModel.findById(cid);

        // const {qid} = req.params;
        if(!isValidID(qid))
        {
            return res.status(404).send("Question doesn't exist");
        }
        let question = category.questions.id(qid);

        question.status = 2;
        await category.save();

        category.completion = await completionPercent(cid);
        await category.save();

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
        const {cid,qid} = req.params;
        if(!isValidID(cid))
            return res.status(404).send("Category not found");
        let category = await categoryModel.findById(cid);

        // const {qid} = req.params;
        if(!isValidID(qid))
        {
            return res.status(404).send("Question doesn't exist");
        }
        let question = category.questions.id(qid);

        question.status = 0;
        await category.save();

        category.completion = await completionPercent(cid);
        await category.save();

        res.status(200).json({message: "Not completed(0)", question});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const addSolution = async(req,res) =>
{
    try
    {
        const {cid,qid} = req.params;
        if(!isValidID(cid))
        {
            res.status(404).send("Category doesn't exist");
        }
        const category = await categoryModel.findById(cid);

        if(!isValidID(qid))
        {
            res.status(404).send("Question doesn't exist");
        }
        const question = category.questions.id(qid);
        const solution = req.body;
        if(solution != null)
        {
            question.solution = question.solution.concat(solution);
        }
        question.save();
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const deleteQuestion = async(req,res) =>
{
    try
    {
        const {cid,qid} = req.params;
        if(!isValidID(cid))
        {
            res.status(404).send("Category doesn't exist");
        }
        const category = await categoryModel.findById(cid);

        if(!isValidID(qid))
        {
            res.status(404).send("Question doesn't exist");
        }
        const questionIdx = category.questions.findIndex((question) => question._id == qid);
        if (questionIdx === -1) 
        {
            return res.status(404).send("Question not found");
        }
        const question = category.questions.id(qid);
        if(question != null)
        {
            category.questions.splice(questionIdx, 1);
            await category.save();
            if(category.questions.length != 0)
            {
                category.completion = await completionPercent(cid);
                await category.save();
            }
            else
            {
                category.completion = 0;
                await category.save();
            }

            res.status(201).send({message: "Question deleted",question});
        }
        else
        {
            res.status(404).send("Question doesn't exist in this category");
        }
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const updateQuestion = async(req,res) =>
{
    try
    {
        const {cid,qid} = req.params;
        if(!isValidID(cid))
        {
            return res.status(404).send("Category does not exist");
        }
        if(!isValidID(qid))
        {
            return res.status(404).send("Question does not exist");
        }

        if(!isValidQuestion(req.body))
        {
            return res.status(404).send("Important parameters like name or difficulty missing");
        }

        const updatedQuestion = req.body;
        
        const category = await categoryModel.findById(cid);
        const questionToUpdate = category.questions.id(qid);

        questionToUpdate.name = updatedQuestion.name || questionToUpdate.name;
        questionToUpdate.difficulty = updatedQuestion.difficulty || questionToUpdate.difficulty;
        questionToUpdate.solution = updatedQuestion.solution || questionToUpdate.solution;
        questionToUpdate.notes = updatedQuestion.notes || questionToUpdate.notes;
        questionToUpdate.status = updatedQuestion.status || questionToUpdate.status;

        await category.save();
        
        category.completion = await completionPercent(cid);
        await category.save();

        res.status(200).json({updatedQuestion})
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}