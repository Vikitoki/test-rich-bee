import { IMovieItem, MovieListActions } from "../../../types/movies";
import {
  FETCH_MOVIE_LIST_FAILURE,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
} from "./action-variables";

const fetchMovieListFailure = (message: string): MovieListActions => ({
  type: FETCH_MOVIE_LIST_FAILURE,
  payload: message,
});

const fetchMovieListSuccess = (data: IMovieItem[]): MovieListActions => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  payload: data,
});

const fetchMovieListRequest = (): MovieListActions => ({
  type: FETCH_MOVIE_LIST_REQUEST,
});

export {
  fetchMovieListFailure,
  fetchMovieListSuccess,
  fetchMovieListRequest,
};
