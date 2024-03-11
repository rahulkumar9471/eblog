const Post = require("../models/postModal");
const Comment = require("../models/commentModal");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const newComment = new Comment({
      post,
      user,
      body,
    });

    const saveComment = await newComment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: saveComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({ 
      post: updatedPost
    });
  } catch (err) { 
    res.status(500).json({ 
        err: "Internal Server Error",
    });
  }
};
