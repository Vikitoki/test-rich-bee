import {
  MovieMoreLikeOneActions,
  MovieMoreLikeOneState,
} from "../../../types/movies";
import {
  FETCH_MORE_MOVIES_LIKE_ONE_FAILURE,
  FETCH_MORE_MOVIES_LIKE_ONE_SUCCESS,
} from "./action-variables";

const initialState: MovieMoreLikeOneState = {
  error: "",
  moviesMoreList: [],
};

export const movieMoreLikeOneReducer = (
  state = initialState,
  action: MovieMoreLikeOneActions
): MovieMoreLikeOneState => {
  switch (action.type) {
    case FETCH_MORE_MOVIES_LIKE_ONE_SUCCESS:
      return {
        ...state,
        error: "",
        moviesMoreList: action.payload,
      };
    case FETCH_MORE_MOVIES_LIKE_ONE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
