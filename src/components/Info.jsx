import React from "react";
import Profile from "../assets/photo_2021-05-31_16-03-05.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function () {
  return (
    <div className="info-items">
      <img src={Profile} alt="" className="info--image" />
      <h1 className="info--title">Adhil E</h1>
      <h4 className="info--subtitle">Frontend Developer</h4>
      <p className="info--caption">adhile.website</p>
      <div className="info--buttons">
        <button className="btn--email">
          <FontAwesomeIcon icon={faEnvelope} className="btn--icon" />
          Email
        </button>
        <button className="btn--linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="btn--icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
