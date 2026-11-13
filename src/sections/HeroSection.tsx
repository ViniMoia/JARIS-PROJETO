import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_CONTENT } from '../data/landingContent';
import { EASE_EXPO } from '../lib/motion';
import { FlashlightSurface } from '../components/MotionPrimitives';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section
      id="sistema"
      ref={sectionRef}
      className="dobra-section pt-28 pb-16 lg:pt-32 lg:pb-20"
      style={{ backgroundColor: 'var(--jaris-white)' }}
    >
      {/* Architectural Grid + Dot Matrix + Parallax Orange Halo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none dot-matrix-bg opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none architect-grid-bg opacity-70"
      />
      <motion.div
        aria-hidden="true"
        style={{
          y: glowY,
          background:
            'radial-gradient(circle, rgba(217, 107, 16, 0.13) 0%, rgba(255, 247, 237, 0.5) 38%, transparent 65%)',
        }}
        className="absolute -top-24 right-[-12%] w-[780px] h-[780px] rounded-full pointer-events-none blur-2xl"
      />
      <div
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(14, 31, 61, 0.04) 0%, transparent 65%)',
        }}
        className="absolute -bottom-32 -left-24 w-[620px] h-[620px] rounded-full pointer-events-none"
      />

      {/* Kinetic Outlined Backdrop Signature (Purely Typographic Brand Depth) */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 inset-x-0 overflow-hidden pointer-events-none select-none"
      >
        <div
          className="kinetic-watermark-track flex gap-16 text-outline-navy uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
          }}
        >
          <span>JARIS &middot; AI CORE &middot; GESTÃO EMPRESARIAL &middot;</span>
          <span>JARIS &middot; AI CORE &middot; GESTÃO EMPRESARIAL &middot;</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 dobra-container my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-7 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_EXPO }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-7"
              style={{
                backgroundColor: 'var(--jaris-orange-bg)',
                border: '1px solid rgba(217, 107, 16, 0.28)',
                boxShadow: '0 2px 10px rgba(217, 107, 16, 0.08)',
              }}
            >
              <Sparkles size={13} style={{ color: 'var(--jaris-orange)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.69rem',
                  color: 'var(--jaris-orange)',
                  letterSpacing: '0.14em',
                }}
              >
                {HERO_CONTENT.badge}
              </span>
            </motion.div>

            <div className="text-reveal-mask">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.16, ease: EASE_EXPO }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(2.3rem, 4.7vw, 4.25rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--jaris-navy)',
                }}
              >
                {HERO_CONTENT.titleStart}{' '}
                <span style={{ color: 'var(--jaris-orange)' }}>
                  {HERO_CONTENT.titleHighlight}
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: EASE_EXPO }}
              className="max-w-2xl mt-6 mb-9"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: 'clamp(1rem, 1.25vw, 1.16rem)',
                lineHeight: 1.72,
                color: 'var(--jaris-ink-body)',
              }}
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: EASE_EXPO }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contato"
                className="btn-shimmer group inline-flex items-center gap-2.5 px-7 py-4 text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  backgroundColor: 'var(--jaris-orange)',
                  borderRadius: 12,
                }}
              >
                {HERO_CONTENT.primaryCta}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#modulos"
                className="inline-flex items-center px-5 py-3.5 rounded-xl border border-[#e5e7eb] bg-white/90 hover:bg-[#fafbfc] hover:border-[#d96b10]/40 transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  color: 'var(--jaris-ink-body)',
                }}
              >
                {HERO_CONTENT.secondaryCta}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: EASE_EXPO }}
              className="mt-11 max-w-xl"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '0.84rem',
                lineHeight: 1.65,
                color: 'var(--jaris-ink-subtle)',
                borderLeft: '2.5px solid var(--jaris-orange)',
                paddingLeft: 16,
              }}
            >
              {HERO_CONTENT.footnote}
            </motion.p>
          </div>

          {/* Interactive Executive Mockup Column */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE_EXPO }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px]">
              {/* Subtle Ambient Frame Halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[28px] opacity-60 blur-2xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 70% 25%, rgba(217, 107, 16, 0.16), transparent 60%)',
                }}
              />

              <FlashlightSurface
                className="relative w-full rounded-2xl overflow-hidden bg-white transition-all duration-500"
                style={{
                  border: '1px solid var(--jaris-border-soft)',
                  boxShadow:
                    '0 28px 70px rgba(14, 31, 61, 0.09), 0 4px 16px rgba(14, 31, 61, 0.04)',
                }}
              >
                {/* Browser Chrome */}
                <div
                  className="relative z-10 flex items-center justify-between px-5 py-3.5"
                  style={{
                    borderBottom: '1px solid var(--jaris-divider)',
                    backgroundColor: 'var(--jaris-surface-subtle)',
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--jaris-ink-faint)',
                    }}
                  >
                    {HERO_CONTENT.mockup.urlLabel}
                  </span>
                  <span className="w-8" aria-hidden="true" />
                </div>

                {/* Dashboard Inner */}
                <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.98rem',
                        color: 'var(--jaris-navy)',
                      }}
                    >
                      {HERO_CONTENT.mockup.title}
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--jaris-orange-bg)',
                        border: '1px solid rgba(217, 107, 16, 0.25)',
                        color: 'var(--jaris-orange)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: 'var(--jaris-orange)' }}
                      />
                      {HERO_CONTENT.mockup.liveBadge}
                    </span>
                  </div>

                  {/* 3 KPIs */}
                  <div className="grid grid-cols-3 gap-3">
                    {HERO_CONTENT.mockup.kpis.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d96b10]/35"
                        style={{
                          backgroundColor: 'var(--jaris-surface-subtle)',
                          border: '1px solid #eef0f4',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
                            color: 'var(--jaris-navy)',
                          }}
                        >
                          {kpi.value}
                        </div>
                        <div
                          className="mt-0.5"
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.68rem',
                            color: 'var(--jaris-ink-subtle)',
                          }}
                        >
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Animated Bar Chart */}
                  <div
                    className="rounded-xl p-5"
                    style={{
                      backgroundColor: 'var(--jaris-surface-subtle)',
                      border: '1px solid #eef0f4',
                    }}
                  >
                    <div className="flex items-end gap-2.5 h-32">
                      {HERO_CONTENT.mockup.bars.map((heightPct, idx) => {
                        const isHovered = hoveredBar === idx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onMouseEnter={() => setHoveredBar(idx)}
                            onMouseLeave={() => setHoveredBar(null)}
                            onFocus={() => setHoveredBar(idx)}
                            onBlur={() => setHoveredBar(null)}
                            aria-label={`${heightPct}%`}
                            className="relative flex-1 h-full flex items-end focus:outline-none cursor-pointer group"
                          >
                            {isHovered && (
                              <span
                                className="absolute -top-6 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded text-white shadow-sm whitespace-nowrap"
                                style={{
                                  backgroundColor: 'var(--jaris-navy)',
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '0.62rem',
                                  fontWeight: 600,
                                }}
                              >
                                {heightPct}%
                              </span>
                            )}
                            <motion.div
                              className="w-full rounded-t-md transition-all duration-200"
                              style={{
                                background: isHovered
                                  ? 'linear-gradient(180deg, #d96b10 0%, #fb923c 100%)'
                                  : 'var(--jaris-orange)',
                                opacity: isHovered ? 1 : 0.34 + idx * 0.12,
                              }}
                              initial={{ height: 0 }}
                              animate={{ height: `${heightPct}%` }}
                              transition={{
                                delay: 0.45 + idx * 0.08,
                                duration: 0.65,
                                ease: EASE_EXPO,
                              }}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FlashlightSurface>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
