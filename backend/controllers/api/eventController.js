const Event = require('../../models/eventModel')

exports.createEvent = async (req, res) => {
    try {
        const newEvent = await Event.create({
            creator_email: req.body.creator_email,
            creator_name: req.body.creator_name,
            date: req.body.date,
            title: req.body.title,
            link: req.body.link
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
exports.getNewEvents = async (req, res) => {
    try {
        const Events = await Event.find({}).sort({createdAt: -1}).limit(3)
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: Events
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.getAllEvents = async (req, res) => {
    try {
        const Events = await Event.find({}).sort({createdAt: -1})
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: Events
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.getOneEvent = async (req, res) => {
    try {
        const oneEvent = await Event.findById(req.params.eventId).exec()
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: oneEvent
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.updateOneEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body).exec()
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: updatedEvent
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}
exports.deleteOneEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndRemove(req.params.eventId, req.body).exec()
        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: deletedEvent
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}