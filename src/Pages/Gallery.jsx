import React from 'react';
import '../style/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2 className="gallery-heading">gallery.</h2>
      <p className="gallery-subtext">
        We design people-inspired experiences that create positive change in people's lives.
      </p>

      <div className="gallery-grid">
  <img src="/img1.jpg" alt="Gallery 1" />
  <img src="/img2.jpg" alt="Gallery 2" />
  <img src="/img3.jpg" alt="Gallery 3" />
  <img src="/img4.jpg" alt="Gallery 4" />
  <img src="/img5.jpg" alt="Gallery 5" />
  <img src="/img6.jpg" alt="Gallery 6" />
  <img src="/img7.jpg" alt="Gallery 7" />
  <img src="/img8.jpg" alt="Gallery 8" />
       </div>
    </div>
  );
};

export default Gallery;
