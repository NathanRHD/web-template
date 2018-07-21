"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The factory to build new action creators based on the definitions you provide
exports.actionCreatorFactory = (type) => {
    return () => ({
        type,
        typeRef: undefined,
        create: (body) => (Object.assign({ type }, body))
    });
};
