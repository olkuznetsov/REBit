import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Catalog from "../components/Catalog";
import Parallax from "../components/Parallax";

const Home = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      const response = await fetch("/api/carousel-items"); // Adjust the API endpoint as needed
      const data = await response.json();
      setCarouselItems(data);
    };

    fetchCarouselItems();
  }, []);

  return (
    <div>
      <Parallax />
      <Carousel items={carouselItems} />
      <Catalog />
    </div>
  );
};

export default Home;
