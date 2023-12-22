import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 }); // Adjust threshold for when the animation should start

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all transform duration-500 delay-50 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
