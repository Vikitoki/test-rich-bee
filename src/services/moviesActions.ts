import { Dispatch } from "react";
import {
  fetchCurrentMovieFailure,
  fetchCurrentMovieRequest,
  fetchCurrentMovieSuccess,
} from "../store/movies/movieList/action-creators";
import { MovieListActions } from "../types/movies";

export const getMoviesList = (name: string) => {
  return async (dispatch: Dispatch<MovieListActions>) => {
    try {
      dispatch(fetchCurrentMovieRequest());

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
      dispatch(fetchCurrentMovieSuccess(data.d));
    } catch (error) {
      dispatch(fetchCurrentMovieFailure(error.message));
    }
  };
};
