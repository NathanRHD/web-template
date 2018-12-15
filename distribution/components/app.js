"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const home_1 = require("./views/home");
exports.App = (props) => React.createElement(React.Fragment, null,
    React.createElement("div", { className: "header" },
        React.createElement("h1", null, "Header")),
    React.createElement("nav", null),
    React.createElement("div", { className: "page" },
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: home_1.Home }))),
    React.createElement("div", { className: "footer" },
        React.createElement("p", null, "Footer")));
