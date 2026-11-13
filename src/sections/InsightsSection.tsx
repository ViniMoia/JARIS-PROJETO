import { useState } from 'react';
import { motion } from 'framer-motion';
import { INSIGHTS_CONTENT } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

export function InsightsSection() {
  const { ref, visible } = useRevealOnce(0.14);
  const [activeMonth, setActiveMonth] = useState<number | null>(null);
  const ChartIcon = INSIGHTS_CONTENT.chartCard.Icon;

  return (
    <section
      id="insights"
      ref={ref}
      className="dobra-section py-24 lg:py-28"
      style={{ backgroundColor: 'var(--jaris-surface-alt)' }}
    >
      <div className="dobra-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left Narrative + Interactive Feature Rows */}
          <div className="lg:col-span-6">
            <SectionHeader
              index="06"
              eyebrow={INSIGHTS_CONTENT.eyebrow}
              title={
                <>
                  {INSIGHTS_CONTENT.titleStart}{' '}
                  <span style={{ color: 'var(--jaris-orange)' }}>
                    {INSIGHTS_CONTENT.titleHighlight}
                  </span>
                </>
              }
              subtitle={INSIGHTS_CONTENT.subtitle}
              visible={visible}
            />

            <div className="flex flex-col gap-4 mt-9">
              {INSIGHTS_CONTENT.features.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.22 + idx * 0.08,
                    ease: EASE_EXPO,
                  }}
                  className="jaris-row rounded-2xl p-4 sm:p-5 bg-white border border-[#eaecf0] shadow-[0_1px_6px_rgba(14,31,61,0.03)]"
                >
                  <div className="jaris-row-inner flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: 'rgba(217, 107, 16, 0.09)',
                        border: '1px solid rgba(217, 107, 16, 0.2)',
                      }}
                    >
                      <feat.Icon
                        size={20}
                        strokeWidth={1.6}
                        color="var(--jaris-orange)"
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          fontSize: '0.98rem',
                          color: 'var(--jaris-navy)',
                          marginBottom: 4,
                        }}
                      >
                        {feat.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 400,
                          fontSize: '0.86rem',
                          lineHeight: 1.65,
                          color: 'var(--jaris-ink-muted)',
                        }}
                      >
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Performance Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE_EXPO }}
            className="lg:col-span-6"
          >
            <FlashlightSurface
              className="w-full rounded-2xl overflow-hidden bg-white"
              style={{
                border: '1px solid var(--jaris-border-soft)',
                boxShadow: 'var(--shadow-card-elevated)',
              }}
            >
              <div
                className="relative z-10 flex items-center justify-between px-6 py-4"
                style={{ borderBottom: '1px solid var(--jaris-divider)' }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--jaris-orange-bg)' }}
                  >
                    <ChartIcon size={16} color="var(--jaris-orange)" />
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.94rem',
                      color: 'var(--jaris-navy)',
                    }}
                  >
                    {INSIGHTS_CONTENT.chartCard.title}
                  </span>
                </div>

                <span
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--jaris-success-bg)',
                    color: 'var(--jaris-success-text)',
                    border: '1px solid var(--jaris-success-border)',
                  }}
                >
                  {INSIGHTS_CONTENT.chartCard.badge}
                </span>
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                {/* Calibrated Horizontal Reference Gridlines */}
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bottom-8 flex flex-col justify-between pointer-events-none"
                  >
                    {[0, 1, 2, 3].map((line) => (
                      <div
                        key={line}
                        className="w-full border-b border-dashed border-[#f1f5f9]"
                      />
                    ))}
                  </div>

                  <div className="relative flex items-end gap-3 sm:gap-4 h-56 sm:h-64 pt-8 pb-2">
                    {INSIGHTS_CONTENT.chartCard.values.map((val, idx) => {
                      const month = INSIGHTS_CONTENT.chartCard.months[idx];
                      const isHovered = activeMonth === idx;

                      return (
                        <button
                          key={month}
                          type="button"
                          onClick={() => setActiveMonth((prev) => (prev === idx ? null : idx))}
                          onMouseEnter={() => setActiveMonth(idx)}
                          onMouseLeave={() => setActiveMonth(null)}
                          onFocus={() => setActiveMonth(idx)}
                          onBlur={() => setActiveMonth(null)}
                          aria-label={`${month}: ${val}%`}
                          aria-pressed={isHovered}
                          className="relative flex-1 h-full flex flex-col items-center justify-end gap-2.5 cursor-pointer focus:outline-none group"
                        >
                          <div className="relative w-full flex-1 min-h-0 flex items-end justify-center">
                            {isHovered && (
                              <span
                                className="absolute -top-7 px-2 py-0.5 rounded-md text-white shadow-sm whitespace-nowrap z-20"
                                style={{
                                  backgroundColor: 'var(--jaris-navy)',
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '0.68rem',
                                  fontWeight: 600,
                                }}
                              >
                                {val}%
                              </span>
                            )}
                            <motion.div
                              className="w-full rounded-t-lg transition-colors duration-200"
                              style={{
                                background: isHovered
                                  ? 'linear-gradient(180deg, #d96b10 0%, #fb923c 100%)'
                                  : 'var(--jaris-orange)',
                                opacity: isHovered ? 1 : 0.36 + idx * 0.11,
                              }}
                              initial={{ height: 0 }}
                              animate={visible ? { height: `${val}%` } : { height: 0 }}
                              transition={{
                                delay: 0.1 + idx * 0.05,
                                duration: 0.48,
                                ease: EASE_EXPO,
                              }}
                            />
                          </div>
                          <span
                            className="transition-colors duration-200"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.74rem',
                              fontWeight: isHovered ? 700 : 500,
                              color: isHovered
                                ? 'var(--jaris-navy)'
                                : 'var(--jaris-ink-subtle)',
                            }}
                          >
                            {month}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FlashlightSurface>

            <p
              className="mt-6 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.96rem',
                color: 'var(--jaris-navy)',
                letterSpacing: '-0.01em',
              }}
            >
              {INSIGHTS_CONTENT.chartCard.captionStart}{' '}
              <span style={{ color: 'var(--jaris-orange)' }}>
                {INSIGHTS_CONTENT.chartCard.captionHighlight}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
