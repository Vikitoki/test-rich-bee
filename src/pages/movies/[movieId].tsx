import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { getCurrentMovie } from "../../services/moviesActions";
import { wrapper } from "../../store/store";
import { NextThunkDispatch } from "../../types/redux";

const CurrentMoviePage: FC = () => {
  const { currentMovie, error } = useTypedSelector(
    (state) => state.movieCurrent
  );
  const { id, q, y, i, s, l } = currentMovie;

  return (
    <MainLayout title={"Current movie"}>
      <div className="current-movie-page">
        <div className="current-movie-page__intro intro-current-page">
          <div className="intro-current-page__img">
            {i?.imageUrl ? <img src={i.imageUrl} alt="" /> : null}
          </div>
          {error ? (
            <span className="status-text status-text_big">{error}</span>
          ) : currentMovie.id ? (
            <div className="intro-current-page__content container">
              <h1 className="intro-current-page__title">{l}</h1>
              <div className="intro-current-page__description">
                <div className="intro-current-page__label label label_yellow">
                  IMDb 8.8
                </div>
                <ul className="intro-current-page__list">
                  <li>{q}</li>
                  <li>{y}</li>
                </ul>
              </div>
              <div className="intro-current-page__btn">
                <a href="/" target="_blank" className="btn btn_white-outline">
                  Watch
                </a>
              </div>
              <div className="intro-current-page__text">
                <p>{s}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await getCurrentMovie(String(params.movieId)));
    return {
      props: {},
    };
  });

export default CurrentMoviePage;
