import express from "express";
import { getPosts, createPosts,updatePosts, deletePosts, updateLikeCount } from "../controllers/posts.js";
const router = express.Router();

router.get('/', getPosts);

router.post('/', createPosts);

router.patch('/:id',updatePosts);

router.delete('/:id',deletePosts);

router.patch('/likes/:id',updateLikeCount);

export default router;