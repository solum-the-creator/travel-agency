'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';

import { Direction, SliderButton } from './slider-button/slider-button';

import styles from './slider.module.scss';

type SliderProps = {
  items: React.ReactNode[];
};

export const Slider: React.FC<SliderProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!containerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setIsStart(scrollLeft === 0);
      setIsEnd(scrollLeft + clientWidth >= scrollWidth);
    };

    const slider = containerRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll);
      checkScroll();
    }

    return () => {
      if (slider) slider.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleDragMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) {
      return;
    }

    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const scroll = (direction: Direction) => {
    if (!containerRef.current) {
      return;
    }

    const scrollAmount = direction === 'left' ? -300 : 300;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className={styles.slider}>
      <div className={styles.buttons}>
        <SliderButton direction="left" onClick={() => scroll('left')} disabled={isStart} />
        <SliderButton direction="right" onClick={() => scroll('right')} disabled={isEnd} />
      </div>
      <div
        className={styles.sliderContainer}
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.sliderItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
