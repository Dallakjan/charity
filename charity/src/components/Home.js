import React from "react";
import "../scss/_home.scss";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home__img"></div>
        <div className="home__content">
          <Header />
          <div className="home__content--article">
            <article>Zacznij pomagać!</article>
            <article>Oddaj niechciane rzeczy w zaufane ręce</article>
          </div>
          <div className="home__content--asset">
            <div></div>
          </div>
          <div className="home__content--buttons">
            <div>
              <p>ODDAJ RZECZY</p>
              <p>ZORGANIZUJ ZBIÓRKĘ </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
