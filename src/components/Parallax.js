import React from "react";
import "./Parallax.css";

const Parallax = () => {
  return (
    <div
      className='parallax'
      style={{ backgroundImage: `url('/assets/images/parallax-image.jpg')` }}>
      <div className='parallax-content'>
        <h1>Welcome to REBit Store</h1>
        <p>Discover amazing products</p>
      </div>
    </div>
  );
};

export default Parallax;
