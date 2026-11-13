import { motion } from 'framer-motion';
import { DIFFERENTIALS_CONTENT } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

export function DifferentialsSection() {
  const { ref, visible } = useRevealOnce(0.14);

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="dobra-section py-24 lg:py-28"
      style={{ backgroundColor: 'var(--jaris-white)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none architect-grid-bg opacity-45"
      />

      <div className="relative z-10 dobra-container">
        <SectionHeader
          index="07"
          eyebrow={DIFFERENTIALS_CONTENT.eyebrow}
          align="center"
          title={
            <>
              {DIFFERENTIALS_CONTENT.titleStart}{' '}
              <span style={{ color: 'var(--jaris-orange)' }}>
                {DIFFERENTIALS_CONTENT.titleHighlight}
              </span>
            </>
          }
          visible={visible}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mt-14">
          {DIFFERENTIALS_CONTENT.items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.14 + idx * 0.1,
                ease: EASE_EXPO,
              }}
              className="flex h-full"
            >
              <FlashlightSurface
                className="jaris-card-hover w-full rounded-2xl p-8 sm:p-10 bg-white flex flex-col justify-between overflow-hidden"
                style={{
                  border: '1px solid var(--jaris-border-soft)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: 'var(--jaris-orange-bg)',
                        border: '1px solid rgba(217, 107, 16, 0.24)',
                      }}
                    >
                      <item.Icon
                        size={24}
                        strokeWidth={1.6}
                        color="var(--jaris-orange)"
                      />
                    </div>

                    <span
                      aria-hidden="true"
                      className="select-none"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        fontSize: '2rem',
                        lineHeight: 1,
                        color: 'rgba(14, 31, 61, 0.08)',
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1.16rem',
                      color: 'var(--jaris-navy)',
                      marginBottom: 12,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 400,
                      fontSize: '0.92rem',
                      lineHeight: 1.72,
                      color: 'var(--jaris-ink-muted)',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="relative z-10 mt-8 h-[2px] w-12 rounded-full transition-all duration-300"
                  style={{ backgroundColor: 'rgba(217, 107, 16, 0.3)' }}
                />
              </FlashlightSurface>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
