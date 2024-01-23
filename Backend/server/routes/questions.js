import express from "express";

const router = express.Router({mergeParams:true});

router.post("/",postQuestion)
router.get("/",getAllQuestions);
router.get("/:qid",getQuestionByID);
router.delete("/:qid",deleteQuestionByID);
router.put("/:qid",updateQuestion);
router.patch("/:qid",changeStatus);
router.patch("/:qid",addNote);
router.patch("/:qid",deleteNote);

export default router;