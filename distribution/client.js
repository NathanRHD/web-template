"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const app_1 = require("./components/app");
const react_dom_1 = require("react-dom");
const sagas_1 = require("./redux/sagas");
const redux_1 = require("redux");
const state_1 = require("./redux/state");
const middlewares_1 = require("./redux/middlewares");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const initClient = () => {
    const store = redux_1.createStore(state_1.reducer, middlewares_1.getAppliedMiddleware());
    sagas_1.runAllDuckEggSagas();
    const ClientApp = React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(app_1.App, null)));
    react_dom_1.render(ClientApp, document.getElementById("root"));
};
if (typeof window !== "undefined") {
    initClient();
}
