import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:userId/", verifyToken, getUserPosts);
router.get("/", verifyToken, getFeedPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
