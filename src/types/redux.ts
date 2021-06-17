import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { commonReducer } from "../store/rootReducer";

export type RootState = ReturnType<typeof commonReducer>;
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
