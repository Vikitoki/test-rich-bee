import React from "react";

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-page__container container">
        <div className="home-page__content">
          <h1 className="home-page__title">
            Unlimited movies, TV shows, and more.
          </h1>
          <h3 className="home-page__sub-title">
            Watch anywhere. Cancel anytime.
          </h3>
          <div className="home-page__form">
            <form action="#" className="form form_home">
              <div className="form__items form__items_home">
                <div className="form__item">
                  <input
                    type="text"
                    name="homeSearch"
                    id="homeSearch"
                    className="form__input form__input_home"
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
      </div>
    </section>
  );
};

export default Home;
