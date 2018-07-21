"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = require("redux-saga");
exports.sagaMiddleware = redux_saga_1.default();
const middlewares = [exports.sagaMiddleware];
exports.getAppliedMiddleware = () => {
    if (typeof window !== "undefined") {
        const devTools = window["devToolsExtension"] || (() => f => f);
        return redux_1.compose(redux_1.applyMiddleware(...middlewares), devTools());
    }
    return redux_1.applyMiddleware(...middlewares);
};
