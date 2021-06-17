import React, { FC } from "react";
import Link from "next/link";
import { IMovieItem } from "../../types/movies";

interface MovieCartProps {
  movieInfo: IMovieItem;
}

const MovieCart: FC<MovieCartProps> = ({ movieInfo }) => {

  const { id, q, y, i, s,l } = movieInfo;

  return (
    <div className="movie-cart">
      <div className="movie-cart__left-part">
        <Link href={`movies/${id}`}>
          <a className="movie-cart__img">
            {i?.imageUrl ? <img src={i.imageUrl} alt="" /> : <img src="https://via.placeholder.com/150"></img>}
          </a>
        </Link>
      </div>
      <div className="movie-cart__right-part">
        <div className="movie-cart__content content-movie-cart">
          <div className="content-movie-cart__top">
            <Link href={`movies/${id}`}>
              <a className="content-movie-cart__title">{l}</a>
            </Link>
            <span className="content-movie-cart__label label label_yellow">
              IMDb 8.8
            </span>
          </div>
          <ul className="content-movie-cart__description">
            <li>{q}</li>
            <li>{y}</li>
          </ul>
          <div className="content-movie-cart__text">
            <p>{s}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieCart };
