import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000); // Change the delay (in milliseconds) between slides as desired

    return () => clearTimeout(timer);
  }, [currentImage, images.length]);

  return (
    <div className="slideshow">
      <img src={images[currentImage]} alt="Slideshow" className="slide-image" />
    </div>
  );
};

export default Slideshow;
