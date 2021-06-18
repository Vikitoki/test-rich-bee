import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { movieCurrentReducer } from "./movies/movieCurrent/reducer";
import { movieListReducer } from "./movies/movieList/reducer";
import { movieMoreLikeOneReducer } from "./movies/movieMoreLikeOne/reducer";

const commonReducer = combineReducers({
  movieList: movieListReducer,
  movieCurrent: movieCurrentReducer,
  movieMoreLikeOne: movieMoreLikeOneReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return commonReducer(state, action);
  }
};

export { rootReducer, commonReducer };
