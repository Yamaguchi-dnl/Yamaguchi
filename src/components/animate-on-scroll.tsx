"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationClassName: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimateOnScroll({
  children,
  className,
  animationClassName,
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

  return (
    <div
      ref={ref}
      className={cn(
        isIntersecting ? animationClassName : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
