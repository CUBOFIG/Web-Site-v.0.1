import React from "react";
import ButtonShared from "shared/ButtonShared/ButtonShared";
import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "shared/FontAwesomeIcon/FontAwesomeIcon";

const Footer = () => {
  return (
    <div className="footer-contain">
      <section className="footer-suscription">
        <p className="footer-suscription-heading">Join the ADVENTURE.</p>
        <p className="footer-suscription-text">
          You can unsuscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              placeholder="Yout Email"
              type="email"
              name="email"
              className="footer-input"
            />

            <ButtonShared buttonStyle="btn--outline">Subscribe</ButtonShared>
          </form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>More of Us</h2>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
            <Link to="/services">How it Works</Link>
            <Link to="/sign-up">Testumonials</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i>
                {" "}
                <FontAwesomeIcon
                  size="lg"
                  className="ml-1"
                  icon={faTwitter}
                />{" "}
              </i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i>
                {" "}
                <FontAwesomeIcon
                  size="lg"
                  className="ml-1"
                  icon={faInstagram}
                />{" "}
              </i>
            </Link>
            <Link
              className="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i>
                {" "}
                <FontAwesomeIcon
                  size="lg"
                  className="ml-1"
                  icon={faGithub}
                />{" "}
              </i>
            </Link>
          </div>

          <div className="footer-logo">
            <Link className="social-logo" to="/">
              CUBE{" "}
              <i>
                {" "}
                <FontAwesomeIcon size="lg" className="ml-1" icon="cubes" />{" "}
              </i>
            </Link>
          </div>

          <small className="website-rights">CUBE &copy; Copyright 2020</small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
