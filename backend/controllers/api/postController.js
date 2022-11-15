const Post = require('../../models/postModel')

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create({
            creator_email: req.body.creator_email,
            creator_name: req.body.creator_name,
            category: req.body.category,
            title: req.body.title,
            description: req.body.description
        })
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.getNewPosts = async (req, res) => {
    try {
        const Posts = await Post.find({}).sort({createdAt: -1}).limit(3)
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: Posts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.getAllPosts = async (req, res) => {
    try {
        const Posts = await Post.find({}).sort({createdAt: -1})
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: Posts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.getCatPosts = async (req, res) => {
    try {
        const catPosts = await Post.find({category: req.params.cat}).exec()
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: catPosts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.getOnePost = async (req, res) => {
    try {
        const onePost = await Post.findById(req.params.postId).exec()
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: onePost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.updateOnePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.postId, req.body).exec()
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: updatedPost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.deleteOnePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndRemove(req.params.postId, req.body).exec()
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: deletedPost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}