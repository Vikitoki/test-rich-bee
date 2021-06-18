import React, { FC } from "react";
import Image from "next/image";
import { IMovieItem } from "../../types/movies";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface MovieBlockProps {
  movieInfo: IMovieItem;
}

const MovieBlock: FC<MovieBlockProps> = ({ movieInfo }) => {
  const { id, title, image, runningTimeInMinutes, year, titleType } = movieInfo;
  const modifieId = id.split("/")[2];

  return (
    <Link href={`/movies/${modifieId}`}>
      <a className="movie-block">
        <div className="movie-block__img">
          {image?.url ? (
            <Image src={image.url} alt="" height={260} width={260} />
          ) : (
            <Image
              alt=""
              src={"https://via.placeholder.com/150"}
              height={260}
              width={260}
            />
          )}
        </div>
        <div className="movie-block__content">
          <h4 className="movie-block__title">{title}</h4>
          <ul className="movie-block__list">
            <li>Running time: {runningTimeInMinutes}</li>
            <li>Year: {year}</li>
            <li>Type: {titleType}</li>
          </ul>
          <div className="movie-block__text">
            <p>
              A gangster family epic set in 1900s England, centering on a gang
              who sew razor blades in the peaks of their caps, and their fierce
              boss Tommy Shelby.
            </p>
          </div>
          <span className="movie-block__label label label_yellow">
            IMDb 8.8
          </span>
        </div>
      </a>
    </Link>
  );
};

export { MovieBlock };
