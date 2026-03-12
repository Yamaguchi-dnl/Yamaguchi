"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimateOnScroll({
  children,
  className,
  animationClassName = 'animate-fade-up',
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);
  
  const getInitialTransform = (animClass: string) => {
    if (!animClass) return 'transform translate-y-10';
    if (animClass.includes('down')) return 'transform -translate-y-10';
    if (animClass.includes('left')) return 'transform -translate-x-10';
    if (animClass.includes('right')) return 'transform translate-x-10';
    return 'transform translate-y-10';
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out duration-1000',
        isIntersecting ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getInitialTransform(animationClassName)}`,
        className
      )}
    >
      {children}
    </div>
  );
}
