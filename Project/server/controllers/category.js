import mongoose from "mongoose";
import { categoryModel } from "../models/category.js";

const isValidID = _id => (mongoose.Types.ObjectId.isValid(_id));

const isValidCategory = (category) =>
{
    if(!category.name)
        return false;
    else
        return true;
}

export const postCategory = async(req,res) =>
{
    try
    {
        if(!isValidCategory(req.body))
        {
            return res.status(404).send("Name missing");
        }
        const newCategory = await categoryModel.create(req.body);
        res.status(200).json({newCategory});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const getAllCategories = async(req,res) =>
{
    try
    {
        const categories = await categoryModel.find();
        res.status(200).json({categories});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

export const getCategoryByID = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID(_id))
        {
            return res.status(404).send("Category not found");
        }

        const category = await categoryModel.findById(_id);
        res.status(200).json({category});
    }
    catch (err)
    {
        res.status(500).json({message: err.message});
    }
}

export const deleteCategory = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID(_id))
        {
            return res.status(400).send("Category does not exist");
        }

        await categoryModel.findByIdAndDelete(_id);
        res.status(201).send("Category deleted");
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

export const addNote = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID(_id))
        {
            return res.status(400).send("Category does not exist");
        }
        const update = req.body;

        const category = await categoryModel.findById(_id);
        category.notes = update.notes || category.notes;
        category.save();
        res.status(200).json({category});
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

export const addResources = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID(_id))
        {
            return res.status(400).send("Category does not exist");
        }
        const update = req.body;

        const category = await categoryModel.findById(_id);
        if(update.resources != null)
            category.resources = (category.resources).concat(update.resources);
        category.save();
        res.status(200).json({category});
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

export const updateCategory = async(req,res) =>
{
    try
    {
        const {_id} = req.params;
        if(!isValidID(_id))
        {
            return res.status(404).send("Category does not exist");
        }

        const updatedCategory = req.body;
        
        const categoryToUpdate = await categoryModel.findById(_id);

        categoryToUpdate.name = updatedCategory.name || categoryToUpdate.name;
        categoryToUpdate.resources = updatedCategory.resources || categoryToUpdate.resources;
        categoryToUpdate.notes = updatedCategory.notes || categoryToUpdate.notes;
        categoryToUpdate.questions = updatedCategory.questions || categoryToUpdate.questions;

        categoryToUpdate.save();
    
        res.status(200).json({updatedCategory})
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}