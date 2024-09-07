import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const target = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        console.log('Triggering loadMore from IntersectionObserver');
        callback();
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (target.current) {
      observer.current.observe(target.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [callback]);

  return { target };
};