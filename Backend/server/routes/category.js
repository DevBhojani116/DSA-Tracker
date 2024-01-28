import express from "express";
// import questionsRouter from "./questions.js";
import { postCategory,getAllCategories,getCategoryByID,deleteCategory } from "../controllers/category.js";

const router = express.Router({mergeParams:true});

// router.use("/:cid/questions",questionsRouter);
router.post("/",postCategory);
router.get("/",getAllCategories);
router.get("/:_id",getCategoryByID);
router.delete("/:_id",deleteCategory);
// router.patch("/:_id",addQuestion);
// router.patch("/:_id",updateCompletionStatus);
// router.patch("/:_id",addNote);
// router.patch("/_id",addResource);

export default router;