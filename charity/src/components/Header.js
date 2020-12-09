import React from "react";
import "../scss/_header.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <div className="home__content1">
      <div className="home__content--login">
        <Link className="account_lnk" to="/login">
          Zaloguj
        </Link>
        <Link className="account_lnk" to="/register">
          Załóz konto
        </Link>
      </div>
      <div className="home__content--menu">
        <div>
          <Link className="lnk" to="/">
            Start
          </Link>
          <ScrollLink
            activeClass="active"
            to="steps"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="scroll"
          >
            O co chodzi?
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="scroll"
          >
            O nas
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="foundations"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="scroll"
          >
            Fundacja i organizacje
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="scroll"
          >
            Kontakt
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
