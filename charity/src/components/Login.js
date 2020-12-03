import React from "react";
import "../scss/_login.scss";
import Header from "./Header";

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
          <p>Załóz konto</p>
          <p>zaloguj się</p>
        </div>
      </div>
    </>
  );
}
