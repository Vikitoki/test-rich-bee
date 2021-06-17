import { Context, createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { RootState } from "../types/redux";
import { rootReducer } from "./rootReducer";

const midleware = [thunk];

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...midleware)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});
