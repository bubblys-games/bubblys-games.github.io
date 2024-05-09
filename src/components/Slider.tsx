'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

import { StaticImageData } from 'next/image';

interface Slide {
  image: StaticImageData;
  texts: string[];
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(current => current === slides.length - 1 ? 0 : current + 1);
  }, [slides.length]);

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
  }, [nextSlide]);

  return (
    <div className="relative mx-auto max-w-8xl w-11/12 overflow-hidden rounded-lg touch-action-pan-y">
      <div className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div className="relative flex-shrink-0 w-full" key={index}>
            <Image src={slide.image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
            <div className="absolute left-0 bottom-0 w-full text-white text-left bg-gradient-to-b from-transparent to-[#414141]">
              <p className="lg:pt-8 lg:pl-4 lg:pb-10 lg:text-xl md:pt-8 md:pl-4 md:pb-8 md:text-lg sm:pt-6 sm:pl-3 sm:pb-8 sm:text-sm pt-30 pl-3 pb-8 text-xs lg:leading-10 md:leading-8 sm:leading-6 leading-4 font-semibold">
                {slide.texts[0]}
                <br />
                <em className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold uppercase">{slide.texts[1]}</em>
                <br />
                {slide.texts[2]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 w-full text-center">
        {slides.map((_, index) => (
          <span className={`inline-block w-2 h-2 mx-2 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'} rounded-full cursor-pointer`} key={index} onClick={() => setCurrentIndex(index)} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
