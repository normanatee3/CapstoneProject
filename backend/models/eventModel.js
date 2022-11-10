const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    creator_id: {type:String, required: true},
    creator_name: {type:String, required: true},
    date: {
        day: {type:String, required: true},
        month: {type:String, required: true},
        year: {type:String, required: true},
    },
    title: {type:String, required: true},
    description: {type:String, required: true}
},
{
    timestamps: true,
})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event