import React from 'react';
import Slider from 'react-slick';

interface ImageSliderProps {
  images: string[]; // Array of image URLs
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Screenshot ${index + 1}`} style={{ display: 'block', width: '100%', height: 'auto' }} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
