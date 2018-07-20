"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const middlewares_1 = require("./middlewares");
const state_1 = require("./state");
exports.store = redux_1.createStore(state_1.reducer, middlewares_1.getAppliedMiddleware());
