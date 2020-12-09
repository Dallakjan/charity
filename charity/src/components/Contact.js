import React from "react";
import "../scss/_cotact.scss";
import FromBackground from "../assets/Background-Contact-Form.jpg";
import insta from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";

export default function Contact() {
  return (
    <>
      <div className="contact" id="cotact">
        <div className="contact__img">
          <img src={FromBackground} alt="decoration" />
        </div>
        <div className="form">
          <div className="form__header">
            <h3>Skontaktuj się z nami</h3>
            <div className="form__decoration"></div>
          </div>
          <form className="form__content">
            <div>
              <label htmlFor="name">Wpis swoję imię</label>
              <label htmlFor="mail">Wpisz swój mail</label>
            </div>
            <div>
              <input placeholder="Krzysztof" id="name"></input>
              <input type="mail" placeholder="abc@xyz.pl" id="mail"></input>
            </div>
            <div className="form__content--text">
              <label htmlFor="text">Wpisz swoją wiadomość</label>
              <input type="text" id="text"></input>
            </div>
            <button>Wyślij</button>
            <div className="footer">
              <img src={insta} alt="instagram" />
              <img src={facebook} alt="facebook" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
