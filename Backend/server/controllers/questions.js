import express from "express";

const router = express.router({mergeParams:true});

router.post("/:cid",postQuestion);
router.get("/",getAllQuestions);
router.get("/:_id",getQuestionByID);
router.patch("/:_id/marked",marked);
router.patch("/:_id/done",done);
router.delete("/:_id",deleteQuestion);
router.put("/:_id",updateQuestion);

export default router;