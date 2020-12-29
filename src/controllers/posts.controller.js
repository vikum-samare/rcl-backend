const Post = require("../dbModels/posts.model")
const Comment = require("../dbModels/comments.model")
const { Ok, BadRequest, NotFound, Forbidden } = require("../services/responses")
const Logger = require("../services/Logger")
const logger = new Logger("Posts.controller")

const parsePostsResponse = (posts) => posts.map((({ _id: postId, postTitle, postDescription, postColor, updatedAt: timestamp, comments }) => ({
    postId,
    postTitle,
    postDescription,
    postColor,
    postComments: comments.length,
    timestamp
})))
const parsePostResponse = (post) => {
    const { _id: postId, postTitle, postDescription, postColor, updatedAt: timestamp, comments } = post
    const postComments = comments.map(({ comment }) => comment)
    return {
        postId,
        postTitle,
        postDescription,
        postColor,
        postComments,
        timestamp
    }
}

exports.getAll = async(req, res) => {
    try {

        const posts = await Post.findAll()
        res.send(Ok("OK", parsePostsResponse(posts)))

    }
    catch (error) {
        logger.error(error)
        res.send(BadRequest("NOTOK", error))
    }
}
exports.get = async(req, res) => {
    try {
        const { postId } = req.params
        const post = await Post.findPost({
            _id: postId
        })
        const [first] = post
        res.send(Ok("OK", parsePostResponse(first)))
    }
    catch (error) {
        logger.error(error)
        res.send(NotFound("NOT_FOUND", "Post not found"))
    }


}

exports.create = async(req, res) => {
    try {
        const { title, description, color } = req.body
        const response = await Post.create({
            postTitle: title,
            postDescription: description,
            postColor: color
        })
        res.send(response ? Ok("OK", { result: "success" }) : Ok("NOTOK", { result: "fail" }))
    }
    catch (error) {
        logger.error(error)
        res.send(BadRequest("NOTOK", error))
    }
}
exports.createPostComment = async(req, res) => {
    try {
        const { postId } = req.params
        const { comment } = req.body

        // locate post
        const postById = await Post.findActivePost({
            _id: postId
        })
        const commentResponse = await Comment.save({
            post: postId,
            comment
        })
        const [post] = postById
        post.comments.push(commentResponse)
        Post.save(post)

        res.send(postById ? Ok("OK", { result: "success" }) : Ok("NOTOK", { result: "fail" }))
    }
    catch (error) {
        logger.error(error)
        res.send(Forbidden("FAILED", "Operation failed"))
    }
}

/*
* Todo: Use error handler to manage all errors in each scenarios
* */
