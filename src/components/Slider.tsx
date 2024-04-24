import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y; /* Prevents vertical scrolling when swiping horizontally */
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
`;

const Dot = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 8px;
  background-color: ${props => props.isActive ? '#888' : '#bbb'};
  border-radius: 50%;
  cursor: pointer;
`;

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const nextSlide = () => {
    setCurrentIndex(current => current === images.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrentIndex(current => current === 0 ? images.length - 1 : current - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 50) {
      // Swipe left, next slide
      nextSlide();
    }
    if (touchStart.current - touchEnd.current < -50) {
      // Swipe right, previous slide
      previousSlide();
    }
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(nextSlide, 3000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SliderContainer>
      <SliderWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </Slide>
        ))}
      </SliderWrapper>
      <SliderDots>
        {images.map((_, index) => (
          <Dot key={index} isActive={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </SliderDots>
    </SliderContainer>
  );
};

export default ImageSlider;
