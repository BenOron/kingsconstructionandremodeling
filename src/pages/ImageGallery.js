import React from 'react';
import './ImagGalery.css';
const ImageGallery = (props) => {
  const { imageUrls } = props;
 
  return (
    <div className="gallery-container">
      <div className="gallery">
        {imageUrls?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Images ${index}`}
            className="gallery-item"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
