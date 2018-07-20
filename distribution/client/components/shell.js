"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../redux/store");
const home_1 = require("./views/home");
class Shell extends react_1.Component {
    render() {
        return React.createElement(react_redux_1.Provider, { store: store_1.store },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "header" },
                        React.createElement("h1", null, "Header")),
                    React.createElement("nav", null),
                    React.createElement("div", { className: "page" },
                        React.createElement(react_router_dom_1.Switch, null,
                            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: home_1.Home }))),
                    React.createElement("div", { className: "footer" },
                        React.createElement("p", null, "Footer")))));
    }
}
exports.Shell = Shell;
if (window) {
    react_dom_1.render(React.createElement(Shell, null), document.getElementById("root"));
}
