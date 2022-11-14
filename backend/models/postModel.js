const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    creator_email: {type:String, required: true},
    creator_name: {type:String, required: true},
    category: {type:String, required: true},
    title: {type:String, required: true},
    description: {type:String, required: true}
},
{
    timestamps: true,
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post