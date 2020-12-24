const config = require("../utils/config")
const mongoose = require("mongoose")

mongoose.Promise = require("bluebird")
const Logger = require("../services/Logger")
const logger = new Logger("mogoDBClient")

const { MONGOURI, MONGOTESTURI, NODE_ENV } = config

if (config.env === "dev") mongoose.set("debug", true)


const connect = async() => {
    const mongoURI = (NODE_ENV === "test" ? MONGOTESTURI : MONGOURI)
    const connection = await mongoose.connect(mongoURI, {
        keepAlive: 1,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    return connection
}

mongoose.connection.on("connected", () => {
    logger.info("MongoDB is connected")
})

mongoose.connection.on("error", (err) => {
    Logger.log(`Could not connect to MongoDB because of ${err}`)
    mongoose.disconnect()
})
const close = () => mongoose.disconnect()

module.exports = {
    connect,
    close
}
