// import express
const express = require('express')
// import controller
const eventController = require('../../controllers/api/eventController')
// create router
const router = express.Router()
// use router to redirect
router.route('/').post(eventController.createEvent)
router.route('/allEvents').get(eventController.getAllEvents)
router.route('/newEvents').get(eventController.getNewEvents)
router.route('/:eventId').get(eventController.getOneEvent)
router.route('/:eventId').put(eventController.updateOneEvent)
router.route('/:eventId').delete(eventController.deleteOneEvent)

module.exports = router