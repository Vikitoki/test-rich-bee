import { IMovieItem, MovieMoreLikeOneActions } from "../../../types/movies";
import {
  FETCH_MORE_MOVIES_LIKE_ONE_FAILURE,
  FETCH_MORE_MOVIES_LIKE_ONE_SUCCESS,
} from "./action-variables";

export const fetchMoreMoviesLikeOneSuccess = (
  data: IMovieItem[]
): MovieMoreLikeOneActions => ({
  type: FETCH_MORE_MOVIES_LIKE_ONE_SUCCESS,
  payload: data,
});

export const fetchMoreMoviesLikeOneFailure = (
  message: string
): MovieMoreLikeOneActions => ({
  type: FETCH_MORE_MOVIES_LIKE_ONE_FAILURE,
  payload: message,
});
