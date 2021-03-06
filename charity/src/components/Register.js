import React from "react";
import "../scss/_register.scss";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <Header />
      <div className="register__container">
        <div className="register__container--login">Zarejestruj się</div>
        <div className="register__container--asset"></div>
        <form className="register__container--form">
          <label type="mail" htmlFor="mail">
            Email
          </label>
          <input type="mail" id="mail"></input>
          <label htmlFor="password">Hasło</label>
          <input type="password" id="password"></input>
          <label htmlFor="password">Pwtórz hasło</label>
          <input type="password" id="password"></input>
        </form>
        <div className="register__container--register">
          <p>Załóz konto</p>
          <Link to="/login">
            <p>zaloguj się</p>
          </Link>
        </div>
      </div>
    </>
  );
}
