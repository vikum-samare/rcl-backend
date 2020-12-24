const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentsSchema = Schema({
    comment: { type: String, required: true },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Posts"
    }
})
const Comment = mongoose.model("Comment", CommentsSchema)

module.exports = {
    /**
     * Save new comment
     * @param body
     * @return {Promise<Document<any>>}
     */
    save: (body) => new Comment(body).save()
}
