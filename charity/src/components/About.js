import React from "react";
import "../scss/_about.scss";
import signature from "../assets/Signature.svg";

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="about__left">
          <div className="about__left--content">
            <h4>O nas</h4>
            <div></div>
            <article>
              hajk dallakjanhajk dallakjanhajk dallakjan
              <br />
              hajk dallakjanhajk dallakjanhajk dallakjan
            </article>
            <img src={signature} />
          </div>
        </div>
        <div className="about__right"></div>
      </div>
    </>
  );
}
