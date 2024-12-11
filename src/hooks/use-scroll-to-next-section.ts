import { useCallback, useRef } from 'react';

export const useScrollToNextSection = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const scrollToNext = useCallback(() => {
    if (ref.current) {
      const nextElement = ref.current.nextElementSibling as HTMLElement;
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return { ref, scrollToNext };
};
