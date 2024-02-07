import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'
function Index({ noOfStars }) {
  const [rating, setrating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentId) {
    setrating(getCurrentId);
  }
  function handleMouseLeave() {
    setHover(rating)
  }
  function handleMouseEnter(getCurrentId) {
    setrating(getCurrentId);
  }
  return (
    <div className="Star-Rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index<= (hover|| rating) ? 'Active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default Index;
