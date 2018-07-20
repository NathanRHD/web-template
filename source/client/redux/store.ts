import { createStore, Action } from "redux";

import { getAppliedMiddleware } from "./middlewares";
import { reducer, State } from "./state";

export const store = createStore<State, Action, any, any>(reducer, getAppliedMiddleware() as any);