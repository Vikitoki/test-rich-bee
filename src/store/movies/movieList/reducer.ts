import { MovieListActions, MovieListState } from "../../../types/movies";
import {
  FETCH_MOVIE_LIST_FAILURE,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
} from "./action-variables";

const initialState: MovieListState = {
  movieList: [],
  loading: false,
  error: "",
};

const movieListReducer = (
  state = initialState,
  action: MovieListActions
): MovieListState => {
  switch (action.type) {
    case FETCH_MOVIE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        movieList: action.payload,
      };
    case FETCH_MOVIE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { movieListReducer };
