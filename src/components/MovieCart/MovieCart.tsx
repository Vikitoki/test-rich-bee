import React, { FC } from "react";
import Link from "next/link";
import { IMovieItem } from "../../types/movies";

interface MovieCartProps {
  movieInfo: IMovieItem;
}

const MovieCart: FC<MovieCartProps> = ({ movieInfo }) => {
  const { id, title, image, runningTimeInMinutes, year, titleType } = movieInfo;
  const modifiedId = id.split("/")[2];

  return (
    <div className="movie-cart">
      <div className="movie-cart__left-part">
        <Link href={`movies/${modifiedId}`}>
          <a className="movie-cart__img">
            {image?.url ? (
              <img src={image.url} alt="" />
            ) : (
              <img src="https://via.placeholder.com/150"></img>
            )}
          </a>
        </Link>
      </div>
      <div className="movie-cart__right-part">
        <div className="movie-cart__content content-movie-cart">
          <div className="content-movie-cart__top">
            <Link href={`movies/${modifiedId}`}>
              <a className="content-movie-cart__title">{title}</a>
            </Link>
            <span className="content-movie-cart__label label label_yellow">
              IMDb 8.8
            </span>
          </div>
          <ul className="content-movie-cart__description">
            <li>Running time: {runningTimeInMinutes}</li>
            <li>Year: {year}</li>
            <li>Type: {titleType}</li>
          </ul>
          <div className="content-movie-cart__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              deserunt in, explicabo veniam illum recusandae ratione dolorum
              fugit placeat ad, quam quis nisi numquam eius nesciunt laborum
              nostrum aut accusamus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieCart };
