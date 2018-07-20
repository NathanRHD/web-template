"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defines your reset user state action
const resetUserStateActionType = "RESET_USER_STATE";
exports.resetUserState = () => ({ type: resetUserStateActionType });
// Resets all your user state to its default values if the action is dispatched
exports.resetUserStateReducerFactory = (subreducer) => {
    return (state, action) => subreducer(action.type === resetUserStateActionType ? undefined : state, action);
};
