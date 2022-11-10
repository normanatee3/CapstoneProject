// import express
const express = require('express')
// import controller
const postController = require('../../controllers/api/postController')
// create router
const router = express.Router()
// use router to redirect
router.route('/').post(postController.createPost)
router.route('/:id').get(postController.getPosts)

module.exports = router