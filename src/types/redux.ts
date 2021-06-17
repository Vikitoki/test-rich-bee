import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { rootReducer } from "../store/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
