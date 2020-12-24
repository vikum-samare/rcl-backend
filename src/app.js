const express = require("express")
const cors = require("cors")

const productRouter = require("./routes/postRoutes")

const { NotFound, Ok } = require("./services/responses")

const app = express()


app.use("*/heartbeat", (req, res) => res.status(200).json(Ok("I'm fine, Thank you.!")))

// Middleware
app.use(cors())
app.use(express.json())


// Post routes
app.use("/v1/api/posts", productRouter)


app.use("*", (req, res) => res.status(404).json(NotFound("Not found, go away.")))

module.exports = app
