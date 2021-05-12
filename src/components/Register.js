import React from "react";
import register from "../Media/register.svg";

const Register = () => {
  return (
    <section className={`register container`}>
      <section className={`register__content`}>
        <div>
          <img src={register} alt="register"></img>
        </div>
      </section>

      <section className={`register__section`}>
        <form className="register__form">
          <div className="register__input">
            <label>Email:</label>
            <input type="email"></input>
          </div>
          <div className="register__input">
            <label>Password:</label>
            <input type="password"></input>
          </div>
          <div className="register__input">
            <label>Re-enter Password:</label>
            <input type="password"></input>
          </div>
          <div className="register__input">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
          <div className="register__input">
            <a href="/join">Already User? Login Here</a>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Register;
