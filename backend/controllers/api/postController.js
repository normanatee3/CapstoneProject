const Post = require('../../models/postModel')

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create({
            creator_id: req.body.creator_id,
            creator_name: req.body.creator_name,
            category: req.body.category,
            date: {
                day: req.body.day,
                month: req.body.month,
                year: req.body.year,
            },
            title: req.body.title,
            description: req.body.description
        })
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}