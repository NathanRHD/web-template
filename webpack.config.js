const path = require("path")

module.exports = {
    context: __dirname,
    entry: path.resolve("./distribution/client/components/shell.js"),
    output: {
        path: path.resolve("./static/scripts/"),
        filename: "bundle.js"
    }
}