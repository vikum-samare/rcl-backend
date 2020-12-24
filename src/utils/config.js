/* eslint-disable no-process-env */

const fs = require("fs")
const path = require("path")
const nodeEvars = {
    DEPLOYMENT_ENV: process.env.DEPLOYMENT_ENV,
    nodeEnv: process.env.NODE_ENV,
    APPLICATION: process.env.APPLICATION,
    SESSION_EXPIRY_SECONDS: process.env.SESSION_EXPIRY_SECONDS,
    NODE_ENV: process.env.NODE_ENV
}

const fileEvars = fs.existsSync(path.join(".", "evars.json")) ? JSON.parse(fs.readFileSync("./evars.json")) : {}
const config = {
    ...nodeEvars,
    ...fileEvars
}

module.exports = config
