const base_dir = __dirname

const abs_path = (path) => base_dir + path
// eslint-disable-next-line global-require
global.include = (file) => require(abs_path("/" + file))

const app = require("./app")
const { connect } = require("./clients/mongoDbClient")
const Logger = require("./services/Logger")
const port = 3000
const logger = new Logger("ApplicationServer")

// Initialise Application
connect().then(() => {
    const server = app.listen(port, () => logger.debug(`Server listening on port ${port}.`))
    server.setTimeout(100000)
}).catch(e => {
    logger.error(e)
})


