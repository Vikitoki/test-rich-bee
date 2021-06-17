import React, { FC } from "react";
import Link from "next/link";

const MovieCart: FC = () => {
  return (
    <div className="movie-cart">
      <div className="movie-cart__left-part">
        <Link href="movies/1">
          <a className="movie-cart__img">
            <img src="" alt="" />
          </a>
        </Link>
      </div>
      <div className="movie-cart__right-part">
        <div className="movie-cart__content content-movie-cart">
          <div className="content-movie-cart__top">
            <h4 className="content-movie-cart__title">The Queen's Gambit</h4>
            <span className="content-movie-cart__label">IMDb 8.8</span>
          </div>
          <ul className="content-movie-cart__description">
            <li>TVSeries</li>
            <li>TVSeries</li>
            <li>TVSeries</li>
          </ul>
          <div className="content-movie-cart__text">
            <p>
              Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19
              nominations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieCart };
