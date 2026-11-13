import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { EASE_EXPO } from '../lib/motion';

interface FlashlightSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FlashlightSurface({
  children,
  className = '',
  onMouseMove,
  ...props
}: FlashlightSurfaceProps) {
  const surfaceRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const node = surfaceRef.current;
      if (node) {
        const rect = node.getBoundingClientRect();
        node.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        node.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
      onMouseMove?.(e);
    },
    [onMouseMove],
  );

  return (
    <div
      ref={surfaceRef}
      onMouseMove={handleMouseMove}
      className={`flashlight-surface ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  visible: boolean;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  visible,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
        className={`inline-flex items-center gap-3 mb-4 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        {index && (
          <span
            className="inline-flex items-center justify-center px-2 py-0.5 rounded-md border"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 600,
              color: 'var(--jaris-navy)',
              backgroundColor: 'var(--jaris-navy-tint)',
              borderColor: 'rgba(14, 31, 61, 0.12)',
              letterSpacing: '0.06em',
            }}
          >
            {index}
          </span>
        )}
        <span
          className="h-px w-6"
          style={{ backgroundColor: 'var(--jaris-orange)' }}
          aria-hidden="true"
        />
        <span
          className="uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.72rem',
            color: 'var(--jaris-orange)',
            letterSpacing: '0.2em',
          }}
        >
          {eyebrow}
        </span>
      </motion.div>

      <div className="text-reveal-mask">
        <motion.h2
          initial={{ y: '100%', opacity: 0 }}
          animate={visible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE_EXPO }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.85rem, 3.6vw, 2.75rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'var(--jaris-navy)',
          }}
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18, ease: EASE_EXPO }}
          className={`mt-4 ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
            lineHeight: 1.7,
            color: 'var(--jaris-ink-muted)',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
