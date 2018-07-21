"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const app_1 = require("./components/app");
const redux_1 = require("redux");
const state_1 = require("./redux/state");
const middlewares_1 = require("./redux/middlewares");
const initServer = () => {
    const server = express();
    const port = process.env.PORT || 8080;
    server.use(express.static("static"));
    server.use("*", (req, res) => {
        const context = {};
        const store = redux_1.createStore(state_1.reducer, middlewares_1.getAppliedMiddleware());
        const ServerApp = React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(react_router_1.StaticRouter, { location: req.url, context: context },
                React.createElement(app_1.App, null)));
        const appHtml = `<html>
        <head>
            <title>Web Template</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <link href="/styling/main.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">
                ${ReactDOMServer.renderToString(ServerApp)}
            </div>
            <script src="/scripts/bundle.js"></script>
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        </body>
        </html>`;
        res.send(appHtml);
    });
    server.listen(port);
};
if (typeof window === "undefined") {
    initServer();
}
