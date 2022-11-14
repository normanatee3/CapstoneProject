// import express
const express = require('express')
// import controller
const postController = require('../../controllers/api/postController')
// create router
const router = express.Router()
// use router to redirect
router.route('/').post(postController.createPost)
router.route('/allPosts').get(postController.getAllPosts)
router.route('/newPosts').get(postController.getNewPosts)
router.route('/:postId')
.get(postController.getOnePost)
.put(postController.updateOnePost)
.delete(postController.deleteOnePost)


module.exports = router