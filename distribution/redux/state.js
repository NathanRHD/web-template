"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const index_1 = require("./duck-eggs/index");
const reset_user_state_1 = require("./reset-user-state");
const getDuckEggReducers = (duckEggs) => Object.keys(duckEggs).reduce((memo, key) => {
    const duckEgg = duckEggs[key];
    // "Maps" your duck eggs into a dictionary of reducers
    return Object.assign({}, memo, { [key]: duckEgg.reducer });
}, {});
var User;
(function (User) {
    // Defines your user state type automatically, using the values returned by your duck reducers
    // export type UserState = {
    //   [P in keyof typeof userDuckEggs]: ReturnType<typeof userDuckEggs[P]["reducer"]>
    // }
    const reducers = getDuckEggReducers(index_1.userDuckEggs);
    // Combines all your duck reducers into a single reducer, wrapping it in the reset user state function
    User.reducer = (state, action) => {
        if (!Object.keys(reducers).length) {
            return ((s = {}, a) => s);
        }
        const resetUserStateReducer = reset_user_state_1.resetUserStateReducerFactory(redux_1.combineReducers(reducers));
        return resetUserStateReducer(state, action);
    };
})(User || (User = {}));
// The same as with user state, without reverting state on logout
var System;
(function (System) {
    const reducers = getDuckEggReducers(index_1.systemDuckEggs);
    System.reducer = (state, action) => {
        if (!Object.keys(reducers).length) {
            return ((s = {}, a) => s);
        }
        return redux_1.combineReducers(reducers)(state, action);
    };
})(System || (System = {}));
// The single reducer for your redux store's entire state
exports.reducer = redux_1.combineReducers({
    system: System.reducer,
    user: User.reducer
});
