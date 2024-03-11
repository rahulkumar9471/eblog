const Post = require("../models/postModal");
const Like = require("../models/likeModal");

exports.likePost = async (req, res) =>{
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user
        });
        const saveLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: saveLike._id}}, {new: true})
        .populate("likes")
        .exec();


        res.status(200).json(updatedPost);
    }catch(e){
        console.log(e);
        res.status(500).json({
            error : e
        });
    }
}


exports.unlinkPost = async (req, res) =>{
    try{
        const {post , like} = req.body;

        const deleteLke = await Like.findOneAndDelete({post: post, _id: like})

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deleteLke._id}}, {new: true})
   
        res.status(200).json(updatedPost);
    }catch(e){
        console.log(e);
        res.status(500).json({
            error : e
        });
    }
}