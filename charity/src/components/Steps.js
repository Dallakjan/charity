import React from "react";
import "../scss/_steps.scss";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Steps() {
  return (
    <>
      <div className="steps" id="steps">
        <div className="steps__header">
          <p>Wystarczą 4 proste kroki</p>
          <div></div>
        </div>
        <div className="steps__content">
          <div className="steps__content--element">
            <div className="steps__content--elements">
              <img src={icon1}></img>
              <p>Wybierz rzeczy</p>
              <hr />
              <span>
                ubrania,zabawki, <br />
                sprzęt i inne,
              </span>
            </div>
            <div className="steps__content--elements">
              <img src={icon2}></img>
              <p>Spakuj je</p>
              <hr />
              <span>
                ubrania,zabawki, <br />
                sprzęt i inne,
              </span>
            </div>
            <div className="steps__content--elements">
              <img src={icon3}></img>
              <p>
                Zdecyduj komu
                <br />
                chcesz pomóc
              </p>
              <hr />
              <span>
                ubrania,zabawki, <br />
                sprzęt i inne,
              </span>
            </div>
            <div className="steps__content--elements">
              <img src={icon4}></img>
              <p>Zamów kuriera</p>
              <hr />
              <span>
                ubrania,zabawki, <br />
                sprzęt i inne,
              </span>
            </div>
          </div>
        </div>
        <div className="steps__button">
          <Link className="ln" to="/login">
            <p>
              ODDAJ <br />
              RZECZY
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
