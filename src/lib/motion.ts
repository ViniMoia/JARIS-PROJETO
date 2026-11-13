import { useEffect, useRef, useState } from 'react';

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export const REVEAL_VARIANTS = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const supportsIntersectionObserver =
  typeof window !== 'undefined' && 'IntersectionObserver' in window;

export function useRevealOnce(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(!supportsIntersectionObserver);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsIntersectionObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

