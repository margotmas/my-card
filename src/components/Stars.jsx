import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../style.scss";

function Stars() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  };
  return (
    <>
      <p className="Rate">Notez cet album</p>
      <Rating
        transition
        size={35}
        allowFraction
        fillColor="#F58971"
        onClick={handleRating}
        ratingValue={rating}
      ></Rating>
    </>
  );
}

export default Stars;
