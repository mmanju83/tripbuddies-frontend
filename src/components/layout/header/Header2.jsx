import React, { useState } from "react";
import Menu from "../components/Menu";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";

import { Link, useNavigate } from "react-router-dom";

export default function Header2() {
  const navigate = useNavigate();

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="header -type-2 js-header">
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Link to="/" className="header__logo">
              <img src="/img/logo.svg" alt="logo icon" />
            </Link>

            <Menu />
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18"></i>
            </button>
          </div>

          <div className="header__right xl:d-none">
            <div className="ml-30">
              <Currency />
            </div>

            <Link to="/help-center" className="">
              Help
            </Link>

            <Link to="/register" className="ml-30">
              Sign up
            </Link>

            <a
              href="login"
              className="button -sm -outline-dark-1 rounded-200 text-dark-1 ml-30"
            >
              Log in
            </a>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
