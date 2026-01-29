import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  direction = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-x-0 translate-y-0';
    }

    switch (direction) {
      case 'left':
        // Slide in from left (-x) and bottom (+y)
        return 'opacity-0 -translate-x-12 translate-y-12';
      case 'right':
        // Slide in from right (+x) and bottom (+y)
        return 'opacity-0 translate-x-12 translate-y-12';
      case 'up':
      default:
        // Slide in from bottom only
        return 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`w-full transition-all duration-1000 ease-out transform ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;