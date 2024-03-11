const express = require('express');
const router = express.Router();

const {createComment} = require("../controllers/commentController");
const {createPost, getPosts} = require("../controllers/PostController");
const {likePost, unlinkPost} = require("../controllers/likeController");

router.post("/comments/create", createComment);

router.post("/posts/create", createPost);
router.get("/posts", getPosts);
router.post("/likes/like", likePost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlinkPost);

module.exports = router;