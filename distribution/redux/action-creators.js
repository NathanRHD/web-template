"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The factory to build new action creators based on the definitions you provide
exports.actionCreatorFactory = (type) => {
    return () => ({
        type,
        create: (body) => (Object.assign({ type }, body))
    });
};
