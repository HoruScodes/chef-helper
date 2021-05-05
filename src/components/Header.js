/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../Media/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={menuOpen ? `header open` : `header`}>
      <div className={menuOpen ? `overlay  fade-in` : `header  fade-out`}></div>
      <nav className={`container container--pall flex flex-jc-sb flex-ai-c`}>
        <a href="/" className={`header__logo`}>
          <img src={logo} alt="logo"></img>
        </a>

        <a
          href="#"
          id="btnHamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className={`header__toggle hide-for-desktop`}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className={`header__links hide-for-mobile`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/join" className={`button header__cta hide-for-mobile`}>
          Join
        </a>
      </nav>

      <div className={menuOpen ? `header__menu` : `has-fade`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
};

export default Header;
