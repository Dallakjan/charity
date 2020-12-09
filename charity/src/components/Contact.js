import React from "react";
import "../scss/_cotact.scss";
import FromBackground from "../assets/Background-Contact-Form.jpg";

export default function Contact() {
  return (
    <>
      <div className="contact" id="cotact">
        <div className="contact__img">
          <img src={FromBackground} />
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
          </form>
        </div>
      </div>
    </>
  );
}
