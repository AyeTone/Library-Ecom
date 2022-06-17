import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  const fullStar = new Array(Math.floor(rating)).fill(0).map((_, ind) => {
    return <FontAwesomeIcon key={ind} icon="star" />;
  });
  const halfStar = !Number.isInteger(rating) && (
    <FontAwesomeIcon icon="star-half-alt" />
  );
  return (
    <div className="book__ratings">
      {fullStar}
      {halfStar}
    </div>
  );
};

export default Rating;
