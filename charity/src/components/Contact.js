import React, { useState } from "react";
import "../scss/_cotact.scss";
import FromBackground from "../assets/Background-Contact-Form.jpg";
import insta from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";
import { db } from "./firebase";
import Modal from "./modal";
import { useFormik } from "formik";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setMessage("");
    setEmail("");
  };

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
          <form onSubmit={handleSubmit} className="form__content">
            <div>
              <label htmlFor="name">Wpis swoję imię</label>
              <label htmlFor="mail">Wpisz swój mail</label>
            </div>
            <div>
              <input
                placeholder="Krzysztof"
                id="name"
                class="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="mail"
                placeholder="abc@xyz.pl"
                id="mail"
                class="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            {email.indexOf("@") === -1 ? (
              <div class="invalid-feedback" id="inv_mail">
                Wpisz prawidłowego maila
              </div>
            ) : (
              ""
            )}
            <div className="form__content--text">
              <label htmlFor="validationCustom01">Wpisz swoją wiadomość</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Wpisz tekst"
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              {message.length <= 5 ? (
                <div class="invalid-feedback">Wpisz wiadomość</div>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              style={{ background: loader ? "#ccc" : "#ffffffc9" }}
            >
              Wyślij
            </button>
            <div className="footer">
              <img src={insta} alt="instagram" />
              <img src={facebook} alt="facebook" />
            </div>
          </form>
        </div>
      </div>
      {loader && <Modal />}
    </>
  );
}
