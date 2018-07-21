"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_creators_1 = require("../action-creators");
exports.getRandomNumber = action_creators_1.actionCreatorFactory("getRandomNumber")();
exports.setRandomNumber = action_creators_1.actionCreatorFactory("setRandomNumber")();
const actionCreatorRefs = {
    getRandomNumber: exports.getRandomNumber,
    setRandomNumber: exports.setRandomNumber,
};
exports.randomNumberReducer = (state = null, action) => {
    switch (action.type) {
        case "setRandomNumber": {
            return action.payload;
        }
        case "getRandomNumber":
        default: {
            return state;
        }
    }
};
