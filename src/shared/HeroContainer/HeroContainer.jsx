import React from "react";
import FontAwesomeIcon from "shared/FontAwesomeIcon/FontAwesomeIcon";
import ButtonShared from "shared/ButtonShared/ButtonShared";
import Video from "assets/videos/video-1.mp4";
import "./HeroContainer.scss";

const HeroContainer = () => (
  <div className="hero-container">
    <video src={Video} autoPlay loop muted />

    <h1>DESCUBRE UN MUNDO NUEVO.</h1>

    <p>¿Que esperas?</p>

    <div className="hero-btns">
      <ButtonShared
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        RUTA DE APRENDIZAJE
      </ButtonShared>

      <ButtonShared
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        onClick={console.log("hey")}
      >
        WATCH TRAILER{" "}
        <i className="fa-play-circle">
          <FontAwesomeIcon icon="play-circle" />
        </i>
      </ButtonShared>
    </div>
  </div>
);

export default HeroContainer;
