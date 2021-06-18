import { Dispatch } from "react";
import {
  fetchCurrentMovieFailure,
  fetchCurrentMovieSuccess,
} from "../store/movies/movieCurrent/action-creators";
import {
  fetchMovieListFailure,
  fetchMovieListSuccess,
  fetchMovieListRequest,
} from "../store/movies/movieList/action-creators";
import { MovieCurrentActions, MovieListActions } from "../types/movies";

export const getMoviesList = (name: string) => {
  return async (dispatch: Dispatch<MovieListActions>) => {
    try {
      dispatch(fetchMovieListRequest());

      const response = await fetch(
        `https://imdb8.p.rapidapi.com/auto-complete?q=${name}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "c854e798femsh295c8c07155dcb4p197659jsn43c53dcae3c3",
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sorry we couldn`t load movies,pls try later :(");
      }

      const data = await response.json();
      dispatch(fetchMovieListSuccess(data.d));
    } catch (error) {
      dispatch(fetchMovieListFailure(error.message));
    }
  };
};

export const getCurrentMovie = (id: string) => {
  return async (dispatch: Dispatch<MovieCurrentActions>) => {
    try {
      const response = await fetch(
        `https://imdb8.p.rapidapi.com/auto-complete?q=${id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "c854e798femsh295c8c07155dcb4p197659jsn43c53dcae3c3",
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sorry we couldn`t load movies,pls try later :(");
      }

      const data = await response.json();
      dispatch(fetchCurrentMovieSuccess(data.d["0"]));
    } catch (error) {
      dispatch(fetchCurrentMovieFailure(error.message));
    }
  };
};
