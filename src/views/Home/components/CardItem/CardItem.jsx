import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const CardItem = (props) => {
  return (
    <Col xs="12" sm="12" md={props.md} lg={props.lg} className="mb-3">
      <li className="cards__item">
        <Link className="cards__item__link" to={props.goTo}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="TravelImage"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </Col>
  );
};

export default CardItem;
