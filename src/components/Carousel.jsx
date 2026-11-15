import { useState } from 'react';
import './Carousel.scss';
function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextPicture = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const previousPicture = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <button onClick={previousPicture} aria-label="Previous picture">
          ❮
        </button>
      )}

      <img src={pictures[currentIndex]} alt="Property" />

      {pictures.length > 1 && (
        <button onClick={nextPicture} aria-label="Next picture">
          ❯
        </button>
      )}
      {pictures.length > 1 && (
        <span className="carousel-counter">
          {currentIndex + 1}/{pictures.length}
        </span>
      )}
    </div>
  );
}

export default Carousel;