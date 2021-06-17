import {
  FETCH_CURRENT_MOVIE_FAILURE,
  FETCH_CURRENT_MOVIE_SUCCESS,
} from "../store/movies/movieCurrent/action-variables";
import {
  FETCH_MOVIE_LIST_FAILURE,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
} from "../store/movies/movieList/action-variables";

export interface IMovieItem {
  id: string;
  [key: string]: any;
}

export interface MovieListState {
  movieList: IMovieItem[];
  loading: boolean;
  error: string;
}

export interface MovieCurrentState {
  currentMovie: IMovieItem;
  error: string;
}

// Movies list action

interface FetchMovieListRequestAction {
  type: typeof FETCH_MOVIE_LIST_REQUEST;
}

interface FetchMovieListRequestFailure {
  type: typeof FETCH_MOVIE_LIST_FAILURE;
  payload: string;
}

interface FetchMovieListRequestSuccess {
  type: typeof FETCH_MOVIE_LIST_SUCCESS;
  payload: IMovieItem[];
}

// Movie current action

interface FetchCurrentMovieFailureAction {
  type: typeof FETCH_CURRENT_MOVIE_FAILURE;
  payload: string;
}

interface FetchCurrentMovieSuccessAction {
  type: typeof FETCH_CURRENT_MOVIE_SUCCESS;
  payload: IMovieItem;
}

export type MovieListActions =
  | FetchMovieListRequestAction
  | FetchMovieListRequestFailure
  | FetchMovieListRequestSuccess;

export type MovieCurrentActions =
  | FetchCurrentMovieFailureAction
  | FetchCurrentMovieSuccessAction;
