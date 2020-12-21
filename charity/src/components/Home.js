import React from "react";
import "../scss/_home.scss";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Steps from "./Steps";
import About from "./About";
import ThreeColumns from "./ThreeColumns";
import HomeFoundation from "./HomeFoundations";
import Contact from "./Contact";

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
              <Link className="ln" to="/login">
                <p>ODDAJ RZECZY</p>
              </Link>
              <Link className="ln" to="/register">
                <p>ZORGANIZUJ ZBIÓRKĘ </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ThreeColumns />
      <Steps />
      <About />
      <HomeFoundation />
      <Contact />
    </>
  );
}
