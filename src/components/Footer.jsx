import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function () {
  return (
    <footer className="footer">
      <FontAwesomeIcon icon={faSquareTwitter} className="footer-icon" />
      <FontAwesomeIcon icon={faSquareFacebook} className="footer-icon" />
      <FontAwesomeIcon icon={faSquareInstagram} className="footer-icon" />
      <FontAwesomeIcon icon={faSquareGithub} className="footer-icon" />
    </footer>
  );
}
