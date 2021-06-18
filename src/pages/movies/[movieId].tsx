import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { getCurrentMovie, getMoreLikeThis } from "../../services/moviesActions";
import { wrapper } from "../../store/store";
import { NextThunkDispatch } from "../../types/redux";
import Image from "next/image";
import { MovieBlock } from "../../components/MovieBlock/MovieBlock";
import Link from "next/link";

const CurrentMoviePage: FC = () => {
  const { currentMovie, error } = useTypedSelector(
    (state) => state.movieCurrent
  );
  const { errorMore, moviesMoreList } = useTypedSelector(
    (state) => state.movieMoreLikeOne
  );
  const { title, image, runningTimeInMinutes, year, titleType } = currentMovie;

  return (
    <MainLayout title={"Current movie"}>
      <div className="current-movie-page">
        <div className="current-movie-page__intro intro-current-page">
          <div className="intro-current-page__img">
            {image?.url ? <Image layout="fill" src={image.url} alt="" /> : null}
          </div>
          {error ? (
            <span className="status-text status-text_big">{error}</span>
          ) : currentMovie.id ? (
            <div className="intro-current-page__content container">
              <h1 className="intro-current-page__title">{title}</h1>
              <div className="intro-current-page__description">
                <div className="intro-current-page__label label label_yellow">
                  IMDb 8.8
                </div>
                <ul className="intro-current-page__list">
                  <li>Running time: {runningTimeInMinutes}</li>
                  <li>Year: {year}</li>
                  <li>Type: {titleType}</li>
                </ul>
              </div>
              <div className="intro-current-page__btn">
                <Link href="/">
                  <a className="btn btn_white-outline"> Watch</a>
                </Link>
              </div>
              <div className="intro-current-page__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis deserunt in, explicabo veniam illum recusandae ratione
                  dolorum fugit placeat ad, quam quis nisi numquam eius nesciunt
                  laborum nostrum aut accusamus.
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="current-movie-page__more container">
          <h4 className="current-movie-page__title">You may also like</h4>
          <ul className="current-movie-page__list">
            {errorMore ? (
              <span className="status-text status-text_big">{error}</span>
            ) : moviesMoreList.length !== 0 ? (
              moviesMoreList.map((item) => {
                return (
                  <li key={item.id}>
                    <MovieBlock movieInfo={item} />
                  </li>
                );
              })
            ) : null}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await getCurrentMovie(String(params.movieId)));
    await dispatch(await getMoreLikeThis(String(params.movieId)));
    return {
      props: {},
    };
  });

export default CurrentMoviePage;
