import React from "react";

const Login = () => {
  return (
    <section className={`login container-pall`}>
      <section className={`login__content`}>
        <div>
          <h1 className="login__text">
            Let's
            <label className="login__accent"> COOK</label>
            <br />
            <span> something up</span>
          </h1>
        </div>
      </section>

      <section className={`login__section`}>
        <form className="login__form">
          <div className="login__input">
            <label>Email:</label>
            <input type="email"></input>
          </div>
          <div className="login__input">
            <label>Password:</label>
            <input type="password"></input>
          </div>
          <div className="login__input">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div className="login__input">
            <a href="/register">New User/ Register</a>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Login;
