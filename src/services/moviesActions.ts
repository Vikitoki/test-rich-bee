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
import {
  fetchMoreMoviesLikeOneFailure,
  fetchMoreMoviesLikeOneSuccess,
} from "../store/movies/movieMoreLikeOne/action-creators";
import {
  IMovieItem,
  MovieCurrentActions,
  MovieListActions,
  MovieMoreLikeOneActions,
} from "../types/movies";

export const getMoviesList = (name: string) => {
  return async (dispatch: Dispatch<MovieListActions>) => {
    try {
      dispatch(fetchMovieListRequest());

      const response = await fetch(
        `https://imdb8.p.rapidapi.com/title/find?q=${name}`,
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
      dispatch(fetchMovieListSuccess(data.results));
    } catch (error) {
      dispatch(fetchMovieListFailure(error.message));
    }
  };
};

export const getCurrentMovie = (id: string) => {
  return async (dispatch: Dispatch<MovieCurrentActions>) => {
    try {
      const response = await fetch(
        `https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`,
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
      dispatch(fetchCurrentMovieSuccess(data));
    } catch (error) {
      dispatch(fetchCurrentMovieFailure(error.message));
    }
  };
};

export const getMoreLikeThis = (id = "string") => {
  return async (dispatch: Dispatch<MovieMoreLikeOneActions>) => {
    try {
      const response = await fetch(
        `https://imdb8.p.rapidapi.com/title/get-more-like-this?tconst=${id}`,
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
        throw new Error(
          "Sorry we couldn`t load same movies like this one ,pls try later :("
        );
      }

      const data = await response.json();

      const transformData: any = await Promise.all(
        data.map((item) => getOneMovie(item.split("/")[2]))
      ).then((newData) => newData.filter((item: any) => item.id));

      dispatch(fetchMoreMoviesLikeOneSuccess(transformData));
    } catch (error) {
      dispatch(fetchMoreMoviesLikeOneFailure(error.message));
    }
  };
};

// Helpers

const getOneMovie = async (id: string) => {
  const response = await fetch(
    `https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c854e798femsh295c8c07155dcb4p197659jsn43c53dcae3c3",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    }
  );

  const country = await response.json();

  return country;
};
