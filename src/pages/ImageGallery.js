import React from 'react';
import './ImagGalery.css';
const ImageGallery = () => {
  const imageUrls = [
    'https://i.ibb.co/vHHX3gM/2.jpg',
    'https://i.ibb.co/NyYHpC1/3.jpg',
    'https://i.ibb.co/xHrBdXy/4.jpg',
    'https://i.ibb.co/2qqz7gk/5.jpg',
    'https://i.ibb.co/GMdXQY0/6.jpg',
    'https://i.ibb.co/nzwsbzt/7.jpg',
    'https://i.ibb.co/8gkhQ6D/8.jpg',
     'https://i.ibb.co/x6MTb8v/9.jpg',
     'https://i.ibb.co/kXFzFfG/10.jpg',
     'https://i.ibb.co/f4x05jy/11.jpg',
     'https://i.ibb.co/XbK7YNS/12.jpg',
     'https://i.ibb.co/tXsZYrJ/13.jpg',
     'https://i.ibb.co/tKZVTJV/14.jpg',
     'https://i.ibb.co/zSDzmDB/15.jpg',
     'https://i.ibb.co/dK07zxS/16.jpg',
  ];

 
  return (
    <div className="gallery-container">
      <div className="gallery">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className="gallery-item"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
