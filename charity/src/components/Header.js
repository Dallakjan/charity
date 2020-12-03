import React from "react";
import "../scss/_header.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="home__content1">
      <div className="home__content--login">
        <Link to="/login">
          <p>Zaloguj</p>
        </Link>
        <Link to="/register">
          <p>Załóz konto</p>
        </Link>
      </div>
      <div className="home__content--menu">
        <div>
          <Link to="/">
            <p>Start</p>
          </Link>
          <p>O co chodzi?</p>
          <p>O nas</p>
          <p>Fundacja i organizacje</p>
          <p>Kontakt</p>
        </div>
      </div>
    </div>
  );
}
