import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const SliderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  touch-action: pan-y; /* Prevents vertical scrolling when swiping horizontally */

  @media only screen and (max-width: 1280px) {
    width: 96%;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
`;

const TextOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  background-image: linear-gradient(to bottom, rgba(65, 65, 65, 0), rgba(65, 65, 65, 1));

  p {
    padding: 120px 0 20px 20px;
  }

  em {
    font-size: 72px;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;

    p {
      padding: 64px 0 20px 16px;
    }
  
    em {
      font-size: 36px;
      text-transform: uppercase;
    }
  }
  
  @media only screen and (max-width: 480px) {
    font-size: 12px;

    p {
      padding: 48px 0 20px 12px;
    }
  
    em {
      font-size: 24px;
      text-transform: uppercase;
    }
  }
`

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

interface Slide {
  imageUrl: string;
  text: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const nextSlide = () => {
    setCurrentIndex(current => current === slides.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrentIndex(current => current === 0 ? slides.length - 1 : current - 1);
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
    intervalRef.current = window.setInterval(nextSlide, 4000);
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
        {slides.map((slide, index) => (
          <Slide key={index}>
            <img src={slide.imageUrl} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
            <TextOverlay dangerouslySetInnerHTML={{ __html: slide.text }} />
          </Slide>
        ))}
      </SliderWrapper>
      <SliderDots>
        {slides.map((_, index) => (
          <Dot key={index} isActive={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </SliderDots>
    </SliderContainer>
  );
};

export default ImageSlider;
