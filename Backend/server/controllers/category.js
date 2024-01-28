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
        res.status(201);
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