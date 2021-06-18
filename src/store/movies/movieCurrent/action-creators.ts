import { IMovieItem, MovieCurrentActions } from "../../../types/movies";
import {
  FETCH_CURRENT_MOVIE_FAILURE,
  FETCH_CURRENT_MOVIE_SUCCESS,
} from "./action-variables";

const fetchCurrentMovieFailure = (message: string): MovieCurrentActions => ({
  type: FETCH_CURRENT_MOVIE_FAILURE,
  payload: message,
});

const fetchCurrentMovieSuccess = (data: IMovieItem): MovieCurrentActions => ({
  type: FETCH_CURRENT_MOVIE_SUCCESS,
  payload: data,
});

export { fetchCurrentMovieFailure, fetchCurrentMovieSuccess };
