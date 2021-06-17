import { IMovieItem, MovieListActions } from "../../../types/movies";
import {
  FETCH_MOVIE_LIST_FAILURE,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
} from "./action-variables";

const fetchCurrentMovieFailure = (message: string): MovieListActions => ({
  type: FETCH_MOVIE_LIST_FAILURE,
  payload: message,
});

const fetchCurrentMovieSuccess = (data: IMovieItem[]): MovieListActions => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  payload: data,
});

const fetchCurrentMovieRequest = (): MovieListActions => ({
  type: FETCH_MOVIE_LIST_REQUEST,
});

export {
  fetchCurrentMovieFailure,
  fetchCurrentMovieSuccess,
  fetchCurrentMovieRequest,
};
