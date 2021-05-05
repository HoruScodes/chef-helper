/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Hero = () => {
  return (
    <section className={`hero container`}>
      <div className="hero__image"></div>
      <div className={`hero__text container container-pall`}>
        <h1>Next Generation Restaurent Management</h1>
        <p>
          This "Restaurant Management System" is aimed to break the barrier
          restaurant workers are facing.
        </p>
        <a href="/join" className={`button header__cta`}>
          Join
        </a>
      </div>
    </section>
  );
};

export default Hero;
