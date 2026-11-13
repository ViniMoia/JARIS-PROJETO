import { useState } from 'react';
import { motion } from 'framer-motion';
import { PDCA_CONTENT, type PdcaStep } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

function polarToCartesian(cx: number, cy: number, radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function PdcaOrbitDiagram({
  steps,
  activeLetter,
  onSelect,
}: {
  steps: readonly PdcaStep[];
  activeLetter: PdcaStep['letter'];
  onSelect: (letter: PdcaStep['letter']) => void;
}) {
  const arcPath = (startAngle: number, endAngle: number) => {
    const adjustedEnd = startAngle < endAngle ? endAngle : endAngle + 360;
    const start = polarToCartesian(200, 200, 130, startAngle + 20);
    const end = polarToCartesian(200, 200, 130, adjustedEnd - 20);
    return `M ${start.x} ${start.y} A 130 130 0 0 1 ${end.x} ${end.y}`;
  };

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full max-w-[440px] h-auto select-none"
      role="img"
      aria-label={PDCA_CONTENT.svgAriaLabel}
    >
      <defs>
        <marker
          id="pdca-arrow-v2"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="var(--jaris-orange)" />
        </marker>
        <radialGradient id="pdca-glow-v2">
          <stop offset="0%" stopColor="#d96b10" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#d96b10" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Dotted Ring */}
      <circle
        cx={200}
        cy={200}
        r={168}
        fill="none"
        stroke="#0e1f3d"
        strokeOpacity={0.08}
        strokeDasharray="2 7"
        strokeWidth={1.25}
      />

      {/* Secondary Orange Track */}
      <circle
        cx={200}
        cy={200}
        r={130}
        fill="none"
        stroke="#d96b10"
        strokeOpacity={0.1}
        strokeWidth={1}
      />

      <circle cx={200} cy={200} r={98} fill="url(#pdca-glow-v2)" />

      {/* Connecting Animated Arcs */}
      {steps.map((step, idx) => {
        const nextStep = steps[(idx + 1) % steps.length];
        const isArcHighlighted = step.letter === activeLetter;
        return (
          <motion.path
            key={`arc-${step.letter}`}
            d={arcPath(step.angle, nextStep.angle)}
            fill="none"
            stroke="var(--jaris-orange)"
            strokeWidth={isArcHighlighted ? 3.2 : 2.3}
            strokeOpacity={isArcHighlighted ? 1 : 0.72}
            strokeLinecap="round"
            markerEnd="url(#pdca-arrow-v2)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.25 + idx * 0.16, duration: 0.65, ease: 'easeInOut' }}
          />
        );
      })}

      {/* Traveling AI Pulse Particle */}
      <g>
        <circle r={4.5} fill="var(--jaris-orange)" opacity={0.9}>
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            rotate="auto"
            path="M 330 200 A 130 130 0 1 1 70 200 A 130 130 0 1 1 330 200"
          />
        </circle>
      </g>

      {/* Interactive P / D / C / A Nodes */}
      {steps.map((step, idx) => {
        const pos = polarToCartesian(200, 200, 130, step.angle);
        const isActive = step.letter === activeLetter;

        return (
          <motion.g
            key={step.letter}
            onClick={() => onSelect(step.letter)}
            onMouseEnter={() => onSelect(step.letter)}
            role="button"
            tabIndex={0}
            aria-label={`${step.letter} — ${step.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(step.letter);
              }
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: idx * 0.12,
              duration: 0.45,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            style={{
              transformOrigin: `${pos.x}px ${pos.y}px`,
              cursor: 'pointer',
            }}
          >
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isActive ? 45 : 40}
              fill="#d96b10"
              opacity={isActive ? 0.16 : 0.08}
            />
            <circle
              cx={pos.x}
              cy={pos.y}
              r={34}
              fill={isActive ? '#d96b10' : '#ffffff'}
              stroke="#d96b10"
              strokeWidth={2.5}
            />
            <text
              x={pos.x}
              y={pos.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill={isActive ? '#ffffff' : '#d96b10'}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 22,
              }}
            >
              {step.letter}
            </text>
          </motion.g>
        );
      })}

      {/* Center Core Hub */}
      <circle
        cx={200}
        cy={200}
        r={48}
        fill="#ffffff"
        stroke="rgba(217, 107, 16, 0.35)"
        strokeWidth={1.5}
      />
      <text
        x={200}
        y={191}
        textAnchor="middle"
        fill="#0e1f3d"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 11,
          letterSpacing: 1.5,
        }}
      >
        {PDCA_CONTENT.centerLabelTop}
      </text>
      <text
        x={200}
        y={208}
        textAnchor="middle"
        fill="#d96b10"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: 0.8,
        }}
      >
        {PDCA_CONTENT.centerLabelMid}
      </text>
      <text
        x={200}
        y={224}
        textAnchor="middle"
        fill="#6b6b6b"
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          fontSize: 8.5,
          letterSpacing: 1.4,
        }}
      >
        {PDCA_CONTENT.centerLabelSub}
      </text>
    </svg>
  );
}

export function PdcaSection() {
  const { ref, visible } = useRevealOnce(0.12);
  const [activeLetter, setActiveLetter] = useState<PdcaStep['letter']>('P');

  return (
    <section
      id="pdca"
      ref={ref}
      className="dobra-section py-16 lg:py-20"
      style={{ backgroundColor: 'var(--jaris-surface-alt)' }}
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 w-[560px] h-[560px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(circle, rgba(217, 107, 16, 0.09) 0%, transparent 62%)',
        }}
      />

      <div className="relative z-10 dobra-container">
        <SectionHeader
          index="04"
          eyebrow={PDCA_CONTENT.eyebrow}
          align="center"
          title={
            <>
              {PDCA_CONTENT.titleStart}{' '}
              <span style={{ color: 'var(--jaris-orange)' }}>
                {PDCA_CONTENT.titleHighlight}
              </span>
            </>
          }
          subtitle={PDCA_CONTENT.subtitle}
          visible={visible}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 mt-8 lg:mt-10 items-center">
          {/* Interactive Orbital SVG Pedestal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE_EXPO }}
            className="lg:col-span-5 flex justify-center"
          >
            <FlashlightSurface
              className="w-full max-w-[450px] rounded-3xl p-5 sm:p-6 bg-white flex items-center justify-center"
              style={{
                border: '1px solid var(--jaris-border-soft)',
                boxShadow: 'var(--shadow-card-elevated)',
              }}
            >
              <PdcaOrbitDiagram
                steps={PDCA_CONTENT.steps}
                activeLetter={activeLetter}
                onSelect={setActiveLetter}
              />
            </FlashlightSurface>
          </motion.div>

          {/* 4 Bidirectional Synchronized Step Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {PDCA_CONTENT.steps.map((step, idx) => {
              const isActive = step.letter === activeLetter;

              return (
                <motion.article
                  key={step.letter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + idx * 0.08,
                    ease: EASE_EXPO,
                  }}
                  onMouseEnter={() => setActiveLetter(step.letter)}
                  onClick={() => setActiveLetter(step.letter)}
                  className="jaris-row rounded-2xl p-4 sm:p-5 bg-white flex gap-4 cursor-pointer transition-all duration-300"
                  style={{
                    border: isActive
                      ? '1px solid rgba(217, 107, 16, 0.42)'
                      : '1px solid var(--jaris-border-soft)',
                    boxShadow: isActive
                      ? '0 12px 30px rgba(217, 107, 16, 0.09)'
                      : 'var(--shadow-card)',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{
                      backgroundColor: isActive
                        ? 'var(--jaris-orange)'
                        : 'rgba(217, 107, 16, 0.1)',
                      border: '1px solid rgba(217, 107, 16, 0.26)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '1.15rem',
                        color: isActive ? '#ffffff' : 'var(--jaris-orange)',
                      }}
                    >
                      {step.letter}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2.5 mb-2">
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          fontSize: '1.04rem',
                          color: 'var(--jaris-navy)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step.title}
                      </h3>
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          fontSize: '0.62rem',
                          color: 'var(--jaris-orange)',
                          letterSpacing: '0.14em',
                        }}
                      >
                        &middot; {step.subtitle}
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1.5">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2"
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 400,
                            fontSize: '0.84rem',
                            lineHeight: 1.55,
                            color: 'var(--jaris-ink-muted)',
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="shrink-0 rounded-full"
                            style={{
                              width: 5,
                              height: 5,
                              marginTop: 8,
                              backgroundColor: 'var(--jaris-orange)',
                            }}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
