"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server = express();
const port = process.env.PORT || 8080;
const index = `<html>
<head>
    <title>Web Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <link href="/styling/main.css" rel="stylesheet">
</head>
<body>
    <div id="root" />
    <script src="/scripts/bundle.js"></script>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
</body>
</html>`;
server.use(express.static("static"));
server.use("*", (req, res) => {
    res.status(200).send(index);
});
server.listen(port);
