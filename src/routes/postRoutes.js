const express = require("express")

const router = express.Router()

const postsController = require("../controllers/posts.controller")
/**
 * Get all posts
 */
router.get("/all", postsController.getAll)

/**
 * Get post by urn
 */
router.get("/:postId", postsController.get)

/**
 * Create post
 */
router.post("/", postsController.create)

/**
 * Create comment for a post
 */
router.post("/:postId/comment", postsController.createPostComment)

module.exports = router
