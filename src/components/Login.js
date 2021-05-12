import React, { useState } from "react";
import { loginUser } from "../api/api";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState();
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const callloginUserApi = async (e) => {
    e.preventDefault();

    const loginApi = async () => {
      const data = await loginUser(loginData.email, loginData.password);
      if (data.data) {
        //login success
        console.log(data.data);
        setUser(data.data);
        localStorage.setItem("user", data.data);
        setErrorMessage("");
      }

      if (data.response) {
        //error
        setErrorMessage(data.response.data);
      } else {
        setErrorMessage("");
      }
    };
    loginApi();
  };

  if (user) {
    return <div>User Is Logged In!</div>;
  }

  return (
    <section className={`login container`}>
      <section className={`login__content  `}>
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
            <input onChange={handleChange} type="email"></input>
          </div>
          <div className="login__input">
            <label>Password:</label>
            <input onChange={handleChange} type="password"></input>
          </div>
          <div className="login__input">
            <button type="submit" onClick={callloginUserApi} className="btn">
              Login
            </button>
          </div>
          <div className="login__input">
            <a href="/register">New User/ Register</a>
          </div>
          <label>{errorMessage}</label>
        </form>
      </section>
    </section>
  );
};

export default Login;
