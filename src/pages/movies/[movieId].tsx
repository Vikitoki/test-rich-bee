import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { getCurrentMovie, getMoreLikeThis } from "../../services/moviesActions";
import { wrapper } from "../../store/store";
import { NextThunkDispatch } from "../../types/redux";

const CurrentMoviePage: FC = () => {
  const { currentMovie, error } = useTypedSelector(
    (state) => state.movieCurrent
  );
  const { title, image, runningTimeInMinutes, year, titleType } = currentMovie;

  return (
    <MainLayout title={"Current movie"}>
      <div className="current-movie-page">
        <div className="current-movie-page__intro intro-current-page">
          <div className="intro-current-page__img">
            {image?.url ? <img src={image?.url} alt="" /> : null}
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
                <a href="/" target="_blank" className="btn btn_white-outline">
                  Watch
                </a>
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
				<div className="current-movie-page__more">
					<ul className="current-movie-page__list">
						<li>
							
						</li>
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
