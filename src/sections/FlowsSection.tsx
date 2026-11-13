import { motion } from 'framer-motion';
import { FLOWS_CONTENT } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

export function FlowsSection() {
  const { ref, visible } = useRevealOnce(0.12);

  return (
    <section
      id="fluxos"
      ref={ref}
      className="dobra-section py-24 lg:py-28"
      style={{ backgroundColor: 'var(--jaris-white)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none dot-matrix-bg opacity-60"
      />

      <div className="relative z-10 dobra-container">
        <SectionHeader
          index="05"
          eyebrow={FLOWS_CONTENT.eyebrow}
          title={
            <>
              {FLOWS_CONTENT.titleStart}{' '}
              <span style={{ color: 'var(--jaris-orange)' }}>
                {FLOWS_CONTENT.titleHighlight}
              </span>{' '}
              {FLOWS_CONTENT.titleEnd}
            </>
          }
          visible={visible}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-14">
          {FLOWS_CONTENT.flows.map((flow, idx) => (
            <motion.article
              key={flow.title}
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
                className="jaris-card-hover w-full rounded-2xl p-7 sm:p-8 bg-white flex flex-col h-full overflow-hidden"
                style={{
                  border: '1px solid var(--jaris-border-soft)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(217, 107, 16, 0.09)',
                      border: '1px solid rgba(217, 107, 16, 0.22)',
                    }}
                  >
                    <flow.Icon
                      size={22}
                      strokeWidth={1.6}
                      color="var(--jaris-orange)"
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--jaris-ink-faint)',
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h3
                  className="relative z-10 mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.14rem',
                    color: 'var(--jaris-navy)',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {flow.title}
                </h3>

                <p
                  className="relative z-10 mb-7"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    color: 'var(--jaris-ink-muted)',
                  }}
                >
                  {flow.desc}
                </p>

                {/* Vertical Workflow Pipeline */}
                <ul className="relative z-10 flex flex-col gap-3.5 mb-8 flex-1">
                  {flow.steps.map((step, sIdx) => (
                    <li
                      key={step.label}
                      className="relative flex items-start gap-3 group"
                    >
                      {sIdx < flow.steps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[13px] top-7 bottom-[-12px] w-px bg-[#eaecf0]"
                        />
                      )}
                      <div
                        className="relative z-10 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:border-[#d96b10]/50"
                        style={{
                          backgroundColor: 'var(--jaris-surface-alt)',
                          border: '1px solid var(--jaris-border-soft)',
                        }}
                      >
                        <step.Icon
                          size={13}
                          strokeWidth={1.8}
                          color="var(--jaris-orange)"
                        />
                      </div>
                      <span
                        className="pt-0.5"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 400,
                          fontSize: '0.84rem',
                          lineHeight: 1.55,
                          color: 'var(--jaris-ink-body)',
                        }}
                      >
                        {step.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="relative z-10 rounded-xl px-4 py-3.5 mt-auto"
                  style={{
                    backgroundColor: 'var(--jaris-orange-bg)',
                    border: '1px dashed rgba(217, 107, 16, 0.36)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      color: 'var(--jaris-orange)',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {flow.metric}
                  </p>
                </div>
              </FlashlightSurface>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
