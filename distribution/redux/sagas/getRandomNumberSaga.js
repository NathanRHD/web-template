"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_number_1 = require("../ducks/random-number");
const effects_1 = require("redux-saga/effects");
function* getRandomNumberSaga(action) {
    yield effects_1.put(random_number_1.setRandomNumber.create({ payload: Math.random() }));
}
exports.getRandomNumberSaga = getRandomNumberSaga;
function* getRandomNumberRootSaga() {
    yield effects_1.takeEvery(random_number_1.getRandomNumber.type, getRandomNumberSaga);
}
exports.getRandomNumberRootSaga = getRandomNumberRootSaga;
