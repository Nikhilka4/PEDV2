import React from "react";
import JustImage from "../../assets/JustImage.jpg";
import JustImage2 from "../../assets/JustImage2.jpg";
import JustImage3 from "../../assets/JustImage3.jpg";
import JustImage4 from "../../assets/JustImage4.jpg";
import JustImage5 from "../../assets/JustImage5.jpg";
import JustImage6 from "../../assets/JustImage6.jpg";

const ImageGallery = () => {
  // Array of image URLs
  const images = [
    JustImage,
    JustImage2,
    JustImage3,
    JustImage4,
    JustImage5,
    JustImage6,
  ];

  return (
    <div className="w-[87%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt={`Gallery ${index + 1}`} 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
