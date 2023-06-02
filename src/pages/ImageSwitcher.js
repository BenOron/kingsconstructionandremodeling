import React, { useState, useEffect } from 'react';
import './ImageSwitcher.css'; // Import the CSS file for styling

const ImageSwitcher = (props) => {
  const { firstImage, secondImage } = props;
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="image-switcher" >
      <img
        className={`fade ${currentImage === 0 ? 'fade-in' : 'fade-out'}`}
        src={firstImage}
        alt="First "
      />
      <img
        className={`fade ${currentImage === 1 ? 'fade-in' : 'fade-out'}`}
        src={secondImage}
        alt="Second "
      />
    </div>
  );
};

export default ImageSwitcher;
