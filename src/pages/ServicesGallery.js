import React from 'react';
import ImageGallery from './ImageGallery';
import './servicesGallery.css'

const deckImageUrls = [
    'https://i.ibb.co/qg3HGR8/Whats-App-Image-2023-05-30-at-17-52-02.jpg',
    'https://i.ibb.co/w0fwY75/Whats-App-Image-2023-05-30-at-17-52-02-2.jpg',
    'https://i.ibb.co/XZ7dmFF/Whats-App-Image-2023-05-30-at-17-52-02-3.jpg',
    'https://i.ibb.co/4YzNd6B/Whats-App-Image-2023-05-30-at-17-52-02-12.jpg',
    'https://i.ibb.co/sgXj67C/Whats-App-Image-2023-05-30-at-17-52-02-13.jpg',
    'https://i.ibb.co/Qjhy36q/Whats-App-Image-2023-05-30-at-17-31-53.jpg',
    'https://i.ibb.co/WtQhRLn/Whats-App-Image-2023-05-30-at-17-32-53.jpg',
  ];
  
  const yardImages = [
    'https://i.ibb.co/sH4JrR7/Whats-App-Image-2023-06-01-at-20-28-10-1.jpg',
    'https://i.ibb.co/L9dmHNb/Whats-App-Image-2023-06-01-at-20-28-10-2.jpg',
    'https://i.ibb.co/pRg3chJ/Whats-App-Image-2023-06-01-at-20-28-10.jpg',
    'https://i.ibb.co/WV1Qpqk/Whats-App-Image-2023-06-01-at-20-28-28.jpg',
    'https://i.ibb.co/fpgPFKT/Whats-App-Image-2023-06-01-at-20-28-29-1.jpg',
    'https://i.ibb.co/5rQj0R3/Whats-App-Image-2023-06-01-at-20-28-29.jpg',
    'https://i.ibb.co/JRDrTcn/Whats-App-Image-2023-06-01-at-20-28-30-1.jpg',
    'https://i.ibb.co/RzkTcPd/Whats-App-Image-2023-06-01-at-20-28-30.jpg',
    'https://i.ibb.co/59Y39xV/Whats-App-Image-2023-06-01-at-20-37-26-1.jpg',
    'https://i.ibb.co/rstmWtd/Whats-App-Image-2023-06-01-at-20-37-26.jpg',
    'https://i.ibb.co/z8j0Jcq/Whats-App-Image-2023-06-01-at-20-51-15.jpg',
    'https://i.ibb.co/BNZDnHY/Whats-App-Image-2023-06-01-at-20-51-14-1.jpg',
    'https://i.ibb.co/tJ6BrSn/Whats-App-Image-2023-06-01-at-20-51-14.jpg',
    'https://i.ibb.co/sKn38fF/Whats-App-Image-2023-06-01-at-20-19-41.jpg',
  ];

const ServicesGallery = () => {
    return (
        <div>
        <section>
          <h3 className="section-heading">Deck Renovation</h3>
          <ImageGallery imageUrls={deckImageUrls} />
        </section>
      
        <section>
          <h3 className="section-heading">Yard</h3>
          <ImageGallery imageUrls={yardImages} />
        </section>
      </div>
      
    );

}


export default ServicesGallery;