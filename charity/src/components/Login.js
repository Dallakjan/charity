import React from "react";
import "../scss/_login.scss";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Header />
      <div className="login__container">
        <div className="login__container--login">Zaloguj się</div>
        <div className="login__container--asset"></div>
        <form className="login__container--form">
          <label htmlFor="mail">Email</label>
          <input type="mail" id="mail"></input>
          <label htmlFor="password">Hasło</label>
          <input type="password" id="password"></input>
        </form>
        <div className="login__container--register">
          <Link to="/register">
            <p>Załóz konto</p>
          </Link>
          <p>zaloguj się</p>
        </div>
      </div>
    </>
  );
}
