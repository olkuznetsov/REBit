import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (items.length === 0) {
    return <div>No items to display in the carousel.</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className='carousel'>
      <button className='carousel-button prev' onClick={prevSlide}>
        Previous
      </button>
      <div className='carousel-slide'>
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        <h2>{items[currentIndex].title}</h2>
        <p>{items[currentIndex].description}</p>
      </div>
      <button className='carousel-button next' onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
