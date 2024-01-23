import express from "express";

const router = express.Router({mergeParams:true});

router.get("/",getAllQuestions);
router.get("/:_id",getQuestionByID);
router.delete("/:_id",deleteQuestionByID);
router.put("/:_id",updateQuestion);
router.patch("/:_id",changeStatus);
router.patch("/:_id",addNote);
router.patch("/:_id",deleteNote);

export default router;