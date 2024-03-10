import express from "express";

// import questionsRouter from "./questions.js";
import { postCategory,getAllCategories,getCategoryByID,deleteCategory,addNote,addResources,updateCategory } from "../controllers/category.js";
import { postQuestion,getAllQuestions,revision,done,notDone,addSolution,deleteQuestion,updateQuestion } from "../controllers/questions.js";

const router = express.Router({mergeParams:true});

// router.use("/:cid/questions,",questionsRouter);

//////////////////////////////////////category//////////////////////////////////////////
router.post("/",postCategory);
router.get("/",getAllCategories);
router.get("/:_id",getCategoryByID);
router.delete("/:_id",deleteCategory);
// router.patch("/:_id",addQuestion);
// router.patch("/:_id",updateCompletionStatus);
router.patch("/:_id/addNote",addNote);
router.patch("/:_id/addResources",addResources);
router.put("/:_id",updateCategory);

//////////////////////////////////////questions//////////////////////////////////////////
router.get("/:cid/questions",getAllQuestions); 
router.post("/:cid/questions",postQuestion);
router.patch("/:cid/questions/:qid/revision",revision);
router.patch("/:cid/questions/:qid/done",done);
router.patch("/:cid/questions/:qid/notDone",notDone);
router.patch("/:cid/questions/:qid/addSolution", addSolution);
router.delete("/:cid/questions/:qid",deleteQuestion);
router.put("/:cid/questions/:qid",updateQuestion);

export default router;