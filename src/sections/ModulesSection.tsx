import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { MODULES_CONTENT, type ModuleStatus } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

const STATUS_STYLES: Record<
  ModuleStatus,
  { bg: string; color: string; border: string }
> = {
  'Em Construção': {
    bg: 'var(--jaris-warning-bg)',
    color: 'var(--jaris-warning-text)',
    border: 'var(--jaris-warning-border)',
  },
  Roadmap: {
    bg: 'var(--jaris-roadmap-bg)',
    color: 'var(--jaris-roadmap-text)',
    border: 'var(--jaris-roadmap-border)',
  },
  Disponível: {
    bg: 'var(--jaris-success-bg)',
    color: 'var(--jaris-success-text)',
    border: 'var(--jaris-success-border)',
  },
  Core: {
    bg: 'var(--jaris-orange-bg)',
    color: 'var(--jaris-orange)',
    border: '#fed7aa',
  },
};

export function ModulesSection() {
  const { ref, visible } = useRevealOnce(0.12);

  return (
    <section
      id="modulos"
      ref={ref}
      className="dobra-section py-16 lg:py-20"
      style={{ backgroundColor: 'var(--jaris-white)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none architect-grid-bg opacity-50"
      />

      <div className="relative z-10 dobra-container">
        <SectionHeader
          index="03"
          eyebrow={MODULES_CONTENT.eyebrow}
          title={
            <>
              {MODULES_CONTENT.titleStart}{' '}
              <span style={{ color: 'var(--jaris-orange)' }}>
                {MODULES_CONTENT.titleHighlight}
              </span>
            </>
          }
          subtitle={MODULES_CONTENT.subtitle}
          visible={visible}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-10">
          {MODULES_CONTENT.modules.map((mod, idx) => {
            const badge = STATUS_STYLES[mod.status];
            const isCore = mod.status === 'Core';

            return (
              <motion.article
                key={mod.name}
                initial={{ opacity: 0, y: 26 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + idx * 0.07,
                  ease: EASE_EXPO,
                }}
                className="flex h-full"
              >
                <FlashlightSurface
                  className="jaris-card-hover w-full rounded-2xl p-5 sm:p-6 flex flex-col h-full overflow-hidden"
                  style={{
                    background: isCore
                      ? 'linear-gradient(155deg, #ffffff 35%, #fff7ed 100%)'
                      : 'var(--jaris-white)',
                    border: isCore
                      ? '1px solid rgba(217, 107, 16, 0.34)'
                      : '1px solid var(--jaris-border-soft)',
                    boxShadow: isCore
                      ? '0 14px 36px rgba(217, 107, 16, 0.08)'
                      : 'var(--shadow-card)',
                  }}
                >
                  <div className="relative z-10 flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: 'rgba(217, 107, 16, 0.08)',
                          border: '1px solid rgba(217, 107, 16, 0.18)',
                        }}
                      >
                        <mod.Icon
                          size={20}
                          strokeWidth={1.6}
                          color="var(--jaris-orange)"
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          color: 'var(--jaris-ink-faint)',
                        }}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    <span
                      className="px-2.5 py-1 rounded-full uppercase whitespace-nowrap"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        backgroundColor: badge.bg,
                        color: badge.color,
                        border: `1px solid ${badge.border}`,
                      }}
                    >
                      {mod.status}
                    </span>
                  </div>

                  <h3
                    className="relative z-10 mb-3.5"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: 'var(--jaris-navy)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {mod.name}
                  </h3>

                  <ul className="relative z-10 flex flex-col gap-2 mt-auto pt-3.5 border-t border-[#f3f4f6]">
                    {mod.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          strokeWidth={2.3}
                          color="var(--jaris-orange)"
                          className="mt-[3px] shrink-0"
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 400,
                            fontSize: '0.84rem',
                            lineHeight: 1.55,
                            color: 'var(--jaris-ink-muted)',
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </FlashlightSurface>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
