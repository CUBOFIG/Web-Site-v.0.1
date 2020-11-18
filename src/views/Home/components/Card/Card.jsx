import React from "react";
import CardItem from "../CardItem/CardItem";
import { Row } from "reactstrap";
import "./Card.scss";
import imagenes from "assets/images";

const Card = () => {
  return (
    <div className="cards">
      <h1 className="m-0">Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Row>
              {imagenes.map((card, index) => (
                <CardItem
                  text={card.text}
                  src={card.src}
                  goTo={card.path}
                  label={card.label}
                  lg={card.lg}
                  md={card.md}
                  key={index}
                />
              ))}
            </Row>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
