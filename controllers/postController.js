const Post = require('../models/postModal');

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const newPost = new Post({
            title,
            body
        });
        const savePost = await newPost.save();

        res.status(201).json({
            post : savePost
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            error : err
        });
    }
}

exports.getPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json({
            posts
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            error : err
        });
    }
}