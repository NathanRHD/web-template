"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./duck-eggs/index");
const middlewares_1 = require("./middlewares");
exports.runDuckEggSagas = duckEggs => {
    for (const key in duckEggs) {
        const duckEgg = duckEggs[key];
        // Runs the root sagas for all your duck eggs...
        if (duckEgg.rootSaga) {
            middlewares_1.sagaMiddleware.run(duckEgg.rootSaga);
        }
    }
};
exports.runAllDuckEggSagas = () => {
    exports.runDuckEggSagas(index_1.systemDuckEggs);
    exports.runDuckEggSagas(index_1.userDuckEggs);
};
