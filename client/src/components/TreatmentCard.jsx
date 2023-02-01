import React from "react";
import "./TreatmentCard.css";

const TreatmentCard = ({ data }) => {
  const { title, description } = data;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="https://cdn-icons-png.flaticon.com/512/2441/2441092.png" />
          <p className="title">{title}</p>
          <p>{""}</p>
        </div>
        <div className="flip-card-back">
          <p className="title sub">{description}</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
