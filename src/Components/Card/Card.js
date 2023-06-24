import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              We provide the best innovative products to you.
            </p>

            <Link to="/About" className="btn btn-primary">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
