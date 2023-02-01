import React from "react";
import "./TreatmentCard.css";

const TreatmentCard = ({ data }) => {
  const { image, title, description } = data;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flex-div">
            <img src={image} alt={title} />
          </div>
          {/* <p className="title">{title}</p> */}
          <p>{""}</p>
        </div>
        <div className="flip-card-back">
          <p className="title">{description}</p>         
        </div>
      </div>
      <p className="heading">{title}</p>
    </div>
  );
};

export default TreatmentCard;
