import { MovieCurrentActions, MovieCurrentState } from "../../../types/movies";
import {
  FETCH_CURRENT_MOVIE_FAILURE,
  FETCH_CURRENT_MOVIE_SUCCESS,
} from "./action-variables";

const initialState: MovieCurrentState = {
  currentMovie: {
    id: "",
  },
  error: "",
};

const movieCurrentReducer = (
  state = initialState,
  action: MovieCurrentActions
): MovieCurrentState => {
  switch (action.type) {
    case FETCH_CURRENT_MOVIE_SUCCESS:
      return {
        ...state,
        error: "",
        currentMovie: action.payload,
      };
    case FETCH_CURRENT_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { movieCurrentReducer };
