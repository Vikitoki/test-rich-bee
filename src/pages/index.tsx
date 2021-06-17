import { GetStaticProps } from "next";
import React, { FC, FormEvent, useState } from "react";
import { getMoviesList } from "../services/moviesActions";
import { wrapper } from "../store/store";
import { NextThunkDispatch } from "../types/redux";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

const Home: FC = () => {
  const [seachInputValue, setSeachInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const seacrhInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSeachInputValue(event.target.value);
  };

  const seachFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (seachInputValue.trim() !== "") {
      dispatch(getMoviesList);
    }
  };

  return (
    <section className="home-page">
      <div className="home-page__container container">
        <div className="home-page__content">
          <div className="home-page__main">
            <h1 className="home-page__title">
              Unlimited movies, TV shows, and more.
            </h1>
            <h3 className="home-page__sub-title">
              Watch anywhere. Cancel anytime.
            </h3>
            <div className="home-page__form">
              <form
                onSubmit={seachFormHandler}
                action="#"
                className="form form_home"
              >
                <div className="form__items form__items_home">
                  <div className="form__item">
                    <input
                      type="text"
                      name="homeSearch"
                      value={seachInputValue}
                      onChange={seacrhInputHandler}
                      id="homeSearch"
                      className="form__input form__input_home"
                      placeholder="Type here smth..."
                    ></input>
                  </div>
                </div>
                <div className="form__btn form__btn_home">
                  <button type="submit" className="btn btn_full btn_blue">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
					<div className="home-page__items">
						
					</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
