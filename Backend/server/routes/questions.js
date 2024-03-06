import express from "express";

import { postQuestion,getAllQuestions,getQuestionByID,revision,done,notDone,addSolution,deleteQuestion,updateQuestion } from "../controllers/questions.js";

const router = express.Router({mergeParams:true});

router.post("/:cid",postQuestion);
router.get("/:cid",getAllQuestions);
// router.get("/:_id",getQuestionByID);
router.patch("/:cid/:qid/revision",revision);
router.patch("/:cid/:qid/done",done);
router.patch("/:cid/:qid/notDone",notDone);
router.patch("/:cid/:qid/addSolution", addSolution);
router.delete("/:cid/:qid",deleteQuestion);
router.put("/:cid/:qid",updateQuestion);

export default router;