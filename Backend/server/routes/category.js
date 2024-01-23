import express from "express";

const router = express.Router({mergeParams:true});

router.post("/",postCategory);
router.get("/",getAllCategories);
router.get("/:cid",getCategoryByID);
router.delete("/:cid",deleteCategory);
router.patch("/:cid",addQuestion);
router.patch("/:cid",updateCompletionStatus);
router.patch("/:cid",addNote);
router.patch("/cid",addResource);

export default router;