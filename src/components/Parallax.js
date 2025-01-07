import React from 'react';
import './Parallax.css'; // Assuming you will create a CSS file for styling

const Parallax = () => {
    return (
        <div className="parallax" style={{ backgroundImage: `url('/src/assets/images/parallax-image.jpg')` }}>
            <div className="parallax-content">
                <h1>Welcome to REBit Store</h1>
                <p>Discover amazing products</p>
            </div>
        </div>
    );
};

export default Parallax;