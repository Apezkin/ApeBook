const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


router.get("/", async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

router.post("/", async (req, res) => {
    const post = new Post({
        user: req.body.user,
        title: req.body.title,
        text: req.body.text
    })
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.delete("/:postid", async (req, res) => {
    try{
    const removedPost = await Post.remove({_id: req.params.postid});
    res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.patch("/:user", async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {user: req.params.user},
            {$set: {text: req.body.text}}
        );
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;