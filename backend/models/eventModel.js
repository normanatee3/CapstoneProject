const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    creator_email: {type:String, required: true},
    creator_name: {type:String, required: true},
    date: {type:Date, required:true},
    title: {type:String, required: true},
    link: {type:String}
},
{
    timestamps: true,
})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event