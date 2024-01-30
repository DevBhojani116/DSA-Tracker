import express from "express";

import { postQuestion,getAllQuestions,getQuestionByID,revision,done,notDone,addSolution,deleteQuestion,updateQuestion } from "../controllers/questions.js";

const router = express.Router({mergeParams:true});

router.post("/:cid",postQuestion);
router.get("/",getAllQuestions);
router.get("/:_id",getQuestionByID);
router.patch("/:_id/revision",revision);
router.patch("/:_id/done",done);
router.patch(":_id/notDone",notDone);
router.patch("/:_id/addSolution", addSolution);
router.delete("/:_id",deleteQuestion);
router.put("/:_id",updateQuestion);

export default router;