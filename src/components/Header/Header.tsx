import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <Link href="/">
          <a className="header__logo">Richbee Shows</a>
        </Link>
        <div className="header__form">
          <div className="form">
            <div className="form__items">
              <div className="form__item form__item_search">
                <input
                  type="text"
                  name="headSearch"
                  id="headSearch"
                  className="form__input form__input_search"
                  placeholder="Type here smth..."
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
