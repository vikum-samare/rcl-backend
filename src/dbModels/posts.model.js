const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostsSchema = Schema({
    postTitle: { type: String, required: true },
    postDescription: { type: String, required: true },
    postColor: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]

}, {
    timestamps: true
})
const Post = mongoose.model("Posts", PostsSchema)
module.exports = {
    /**
     * Create new post
     * @param body
     * @return {Promise<Document<any>>}
     */
    create: (body) => new Post(body).save(),

    /**
     * Find all active posts
     * @return {Query<Array<Document>, Document>}
     */
    findAll: () => Post.find({ isActive: true }).sort({ updatedAt: "descending" }),

    /**
     * Find one active post
     * @param criteria
     * @return {Query<Array<Document>, Document>}
     */
    findActivePost: (criteria) => Post.find({ isActive: true, ...criteria }),

    /**
     * Get post details
     * @param criteria
     * @return {Query<Array<Document>, Document>}
     */
    findPost: (criteria) => Post.find({ isActive: true, ...criteria }).populate("comments"),

    /**
     * Save post
     * @param post
     * @return {*}
     */
    save: (post) => post.save()
}
