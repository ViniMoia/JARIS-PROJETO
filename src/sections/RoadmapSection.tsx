import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { ROADMAP_CONTENT, type RoadmapStatus } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

const PHASE_STYLES: Record<
  RoadmapStatus,
  { bg: string; color: string; border: string; dot: string }
> = {
  'Em Desenvolvimento': {
    bg: 'var(--jaris-orange-bg)',
    color: 'var(--jaris-orange)',
    border: '#fed7aa',
    dot: '#d96b10',
  },
  Próximo: {
    bg: 'var(--jaris-info-bg)',
    color: 'var(--jaris-info-text)',
    border: 'var(--jaris-info-border)',
    dot: '#2563eb',
  },
  Roadmap: {
    bg: 'var(--jaris-roadmap-bg)',
    color: 'var(--jaris-roadmap-text)',
    border: 'var(--jaris-roadmap-border)',
    dot: '#94a3b8',
  },
  Visão: {
    bg: 'var(--jaris-vision-bg)',
    color: 'var(--jaris-vision-text)',
    border: 'var(--jaris-vision-border)',
    dot: '#8b5cf6',
  },
};

export function RoadmapSection() {
  const { ref, visible } = useRevealOnce(0.12);

  return (
    <section
      id="roadmap"
      ref={ref}
      className="dobra-section py-24 lg:py-28"
      style={{ backgroundColor: 'var(--jaris-surface-alt)' }}
    >
      <div className="dobra-container">
        <SectionHeader
          index="08"
          eyebrow={ROADMAP_CONTENT.eyebrow}
          title={
            <>
              {ROADMAP_CONTENT.titleStart}{' '}
              <span style={{ color: 'var(--jaris-orange)' }}>
                {ROADMAP_CONTENT.titleHighlight}
              </span>
            </>
          }
          subtitle={ROADMAP_CONTENT.subtitle}
          visible={visible}
        />

        <div className="mt-14 relative">
          {/* Desktop Connecting Rail */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-0 right-0 top-[22px] h-px"
            style={{ backgroundColor: 'var(--jaris-border)' }}
          />
          <motion.div
            aria-hidden="true"
            initial={{ width: 0 }}
            animate={visible ? { width: '18%' } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_EXPO }}
            className="hidden lg:block absolute left-0 top-[21.5px] h-[2px] rounded-full"
            style={{ backgroundColor: 'var(--jaris-orange)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {ROADMAP_CONTENT.phases.map((phase, idx) => {
              const badge = PHASE_STYLES[phase.status];
              const isLast = idx === ROADMAP_CONTENT.phases.length - 1;

              return (
                <motion.article
                  key={phase.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: 0.14 + idx * 0.08,
                    ease: EASE_EXPO,
                  }}
                  className="relative"
                >
                  <div className="flex lg:block items-start gap-4">
                    {/* Timeline Node + Mobile Connector */}
                    <div className="flex flex-col items-center lg:items-start">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 relative z-10 transition-transform duration-300"
                        style={{
                          backgroundColor: 'var(--jaris-white)',
                          border: `2px solid ${badge.dot}`,
                          boxShadow:
                            phase.progress > 0
                              ? '0 0 0 6px rgba(217, 107, 16, 0.12)'
                              : '0 4px 12px rgba(14, 31, 61, 0.06)',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '0.88rem',
                            color: badge.color,
                          }}
                        >
                          {idx + 1}
                        </span>
                      </div>
                      <div
                        aria-hidden="true"
                        className="lg:hidden w-px flex-1 mt-1.5"
                        style={{
                          backgroundColor: isLast
                            ? 'transparent'
                            : 'var(--jaris-border)',
                          minHeight: 72,
                        }}
                      />
                    </div>

                    {/* Phase Card Surface */}
                    <div className="flex-1 lg:mt-5">
                      <FlashlightSurface
                        className="jaris-card-hover rounded-2xl p-5 sm:p-6 bg-white h-full overflow-hidden"
                        style={{
                          border:
                            phase.progress > 0
                              ? '1px solid rgba(217, 107, 16, 0.34)'
                              : '1px solid var(--jaris-border-soft)',
                          boxShadow:
                            phase.progress > 0
                              ? '0 10px 28px rgba(217, 107, 16, 0.08)'
                              : 'var(--shadow-card)',
                        }}
                      >
                        <div className="relative z-10">
                          <span
                            className="inline-block px-2.5 py-1 rounded-full uppercase mb-3.5"
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.58rem',
                              fontWeight: 700,
                              letterSpacing: '0.12em',
                              backgroundColor: badge.bg,
                              color: badge.color,
                              border: `1px solid ${badge.border}`,
                            }}
                          >
                            {phase.status}
                            {phase.progress > 0 ? ` · ${phase.progress}%` : ''}
                          </span>

                          <h3
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                              fontSize: '0.98rem',
                              color: 'var(--jaris-navy)',
                              marginBottom: 8,
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {phase.title}
                          </h3>

                          <p
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontWeight: 400,
                              fontSize: '0.84rem',
                              lineHeight: 1.6,
                              color: 'var(--jaris-ink-muted)',
                            }}
                          >
                            {phase.desc}
                          </p>

                          {phase.progress > 0 && (
                            <div
                              className="mt-4 w-full h-1.5 rounded-full overflow-hidden"
                              style={{ backgroundColor: 'var(--jaris-border-soft)' }}
                            >
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: badge.dot }}
                                initial={{ width: 0 }}
                                animate={visible ? { width: `${phase.progress}%` } : {}}
                                transition={{
                                  delay: 0.4 + idx * 0.1,
                                  duration: 0.85,
                                  ease: EASE_EXPO,
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </FlashlightSurface>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Early Access Callout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55, ease: EASE_EXPO }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#contato"
            className="jaris-card-hover rounded-2xl px-6 py-5 sm:px-8 sm:py-6 flex items-center gap-4 max-w-3xl bg-white"
            style={{
              border: '1px solid rgba(217, 107, 16, 0.28)',
              boxShadow: '0 10px 32px rgba(217, 107, 16, 0.08)',
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'var(--jaris-orange-bg)' }}
            >
              <Rocket size={21} color="var(--jaris-orange)" strokeWidth={1.7} />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: '0.96rem',
                color: 'var(--jaris-navy)',
                lineHeight: 1.55,
              }}
            >
              <strong style={{ color: 'var(--jaris-orange)', fontWeight: 700 }}>
                {ROADMAP_CONTENT.calloutHighlight}
              </strong>{' '}
              {ROADMAP_CONTENT.calloutText}
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
