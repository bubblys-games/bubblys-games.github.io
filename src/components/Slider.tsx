import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

interface ImageSliderProps {
  images: string[]; // Array of image URLs
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
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

  :hover {
    background-color: #444;
  }
`;

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(nextSlide, 3000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SliderContainer>
      <SliderWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
