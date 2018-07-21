"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../middlewares");
const getRandomNumberSaga_1 = require("./getRandomNumberSaga");
const rootSagas = [
    getRandomNumberSaga_1.getRandomNumberRootSaga
];
exports.runRootSagas = () => {
    rootSagas.forEach(rootSaga => {
        middlewares_1.sagaMiddleware.run(rootSaga);
    });
};
