import { motion } from 'framer-motion';
import { CircleCheck, Sparkles, TriangleAlert } from 'lucide-react';
import { CHALLENGE_CONTENT } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

export function ChallengeSection() {
  const { ref, visible } = useRevealOnce(0.14);

  return (
    <section
      id="desafio"
      ref={ref}
      className="dobra-section py-24 lg:py-28"
      style={{ backgroundColor: 'var(--jaris-surface-alt)' }}
    >
      <div className="dobra-container">
        <SectionHeader
          index="02"
          eyebrow={CHALLENGE_CONTENT.eyebrow}
          title={CHALLENGE_CONTENT.title}
          subtitle={CHALLENGE_CONTENT.subtitle}
          visible={visible}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mt-12">
          {/* Left Panel: O desafio (Neutral Cool Structure) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE_EXPO }}
            className="lg:col-span-6 rounded-2xl p-7 sm:p-9 bg-white flex flex-col justify-between"
            style={{
              border: '1px solid var(--jaris-border-soft)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 pb-5 mb-7 border-b border-[#f3f4f6]">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#f1f5f9]">
                    <TriangleAlert size={16} style={{ color: '#64748b' }} />
                  </span>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.74rem',
                      color: '#64748b',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {CHALLENGE_CONTENT.challengeHeading}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--jaris-ink-faint)',
                  }}
                >
                  01—03
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {CHALLENGE_CONTENT.challenges.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.22 + idx * 0.08,
                      ease: EASE_EXPO,
                    }}
                    className="jaris-row rounded-xl p-4 hover:bg-[#f9fafb]"
                  >
                    <div className="jaris-row-inner flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: '#f1f5f9' }}
                      >
                        <item.Icon size={19} strokeWidth={1.6} color="#64748b" />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 600,
                            fontSize: '1rem',
                            color: 'var(--jaris-navy)',
                            marginBottom: 4,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 400,
                            fontSize: '0.88rem',
                            lineHeight: 1.65,
                            color: 'var(--jaris-ink-muted)',
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel: A solução JARIS (Illuminated Orange Energy) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25, ease: EASE_EXPO }}
            className="lg:col-span-6 flex"
          >
            <FlashlightSurface
              className="w-full rounded-2xl p-7 sm:p-9 bg-white overflow-hidden flex flex-col justify-between"
              style={{
                border: '1px solid rgba(217, 107, 16, 0.26)',
                boxShadow: '0 16px 46px rgba(217, 107, 16, 0.09)',
              }}
            >
              {/* Soft Ambient Radial Glow */}
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(217, 107, 16, 0.14) 0%, transparent 62%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 pb-5 mb-7 border-b border-[#ffedd5]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--jaris-orange-bg)' }}
                    >
                      <Sparkles size={16} style={{ color: 'var(--jaris-orange)' }} />
                    </span>
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.74rem',
                        color: 'var(--jaris-orange)',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {CHALLENGE_CONTENT.solutionHeading}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--jaris-orange)',
                    }}
                  >
                    AI-FIRST
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {CHALLENGE_CONTENT.solutions.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={visible ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.34 + idx * 0.08,
                        ease: EASE_EXPO,
                      }}
                      className="jaris-row rounded-xl p-4 hover:bg-[#fff7ed]/60"
                    >
                      <div className="jaris-row-inner flex items-start gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: 'rgba(217, 107, 16, 0.1)',
                            border: '1px solid rgba(217, 107, 16, 0.2)',
                          }}
                        >
                          <item.Icon
                            size={19}
                            strokeWidth={1.6}
                            color="var(--jaris-orange)"
                          />
                        </div>
                        <div>
                          <h3
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                              fontSize: '1rem',
                              color: 'var(--jaris-navy)',
                              marginBottom: 4,
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontWeight: 400,
                              fontSize: '0.88rem',
                              lineHeight: 1.65,
                              color: 'var(--jaris-ink-muted)',
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FlashlightSurface>
          </motion.div>
        </div>

        {/* Conclusion Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE_EXPO }}
          className="mt-12 flex justify-center"
        >
          <p
            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(0.95rem, 1.3vw, 1.08rem)',
              color: 'var(--jaris-navy)',
              letterSpacing: '-0.01em',
              border: '1px solid var(--jaris-border-soft)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <CircleCheck size={19} color="var(--jaris-orange)" className="shrink-0" />
            <span>{CHALLENGE_CONTENT.conclusion}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
