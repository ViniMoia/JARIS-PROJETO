import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CONTACT_CONTENT } from '../data/landingContent';
import { EASE_EXPO, useRevealOnce } from '../lib/motion';
import { FlashlightSurface, SectionHeader } from '../components/MotionPrimitives';

const ROLES = CONTACT_CONTENT.form.roles;
const SIZES = CONTACT_CONTENT.form.companySizes;
const INTERESTS = CONTACT_CONTENT.form.interests;
const PHONE_REGEX = /^[\d\s()+-]{10,20}$/;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Informe seu nome completo (mínimo 3 caracteres).'),
  email: z.string().trim().email('Informe um e-mail corporativo válido.'),
  phone: z
    .string()
    .trim()
    .regex(PHONE_REGEX, 'Informe um telefone/WhatsApp válido.'),
  company: z.string().trim().min(2, 'Informe o nome da empresa.'),
  role: z.enum(ROLES, { error: 'Selecione um cargo.' }),
  companySize: z.enum(SIZES, { error: 'Selecione o porte da empresa.' }),
  interests: z
    .array(z.enum(INTERESTS))
    .min(1, 'Selecione ao menos um módulo de interesse.'),
  message: z
    .string()
    .trim()
    .max(500, 'A mensagem deve ter no máximo 500 caracteres.')
    .optional()
    .or(z.literal('')),
  consent: z.literal(true, {
    error: 'Você precisa aceitar a Política de Privacidade.',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FIELD_LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '0.72rem',
  color: 'var(--jaris-ink-body)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  display: 'block',
  marginBottom: 6,
};

const INPUT_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem',
  fontWeight: 500,
  padding: '11px 14px',
  border: '1px solid var(--jaris-border)',
  borderRadius: 10,
  width: '100%',
  backgroundColor: 'var(--jaris-white)',
  outline: 'none',
  color: 'var(--jaris-ink-strong)',
  transition: 'border-color 180ms ease, box-shadow 180ms ease',
};

const ERROR_TEXT_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.74rem',
  color: 'var(--jaris-danger)',
  marginTop: 5,
};

function DemoContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interests: [],
      consent: false as unknown as true,
      message: '',
    },
  });

  const selectedInterests = useWatch({ control, name: 'interests', defaultValue: [] }) ?? [];
  const messageValue = useWatch({ control, name: 'message', defaultValue: '' }) ?? '';

  const toggleInterest = (item: (typeof INTERESTS)[number]) => {
    const next = selectedInterests.includes(item)
      ? selectedInterests.filter((v) => v !== item)
      : [...selectedInterests, item];
    setValue('interests', next, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.info('demo-request payload', data);
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(CONTACT_CONTENT.form.labels.errorFallback);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: EASE_EXPO }}
        className="rounded-2xl p-10 sm:p-12 text-center bg-white"
        style={{
          border: '1px solid rgba(217, 107, 16, 0.28)',
          boxShadow: 'var(--shadow-card-elevated)',
        }}
      >
        <div
          className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
          style={{ backgroundColor: 'var(--jaris-orange-bg)' }}
        >
          <CircleCheck size={32} color="var(--jaris-orange)" />
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.3rem',
            color: 'var(--jaris-navy)',
          }}
        >
          {CONTACT_CONTENT.form.success.title}
        </h3>
        <p
          className="mt-3 max-w-md mx-auto"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.94rem',
            color: 'var(--jaris-ink-muted)',
            lineHeight: 1.65,
          }}
        >
          {CONTACT_CONTENT.form.success.desc}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 px-6 py-2.5 rounded-xl transition-colors hover:bg-[#f9fafb]"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '0.8rem',
            color: 'var(--jaris-navy)',
            border: '1px solid var(--jaris-border)',
            backgroundColor: 'var(--jaris-white)',
            cursor: 'pointer',
          }}
        >
          {CONTACT_CONTENT.form.success.retry}
        </button>
      </motion.div>
    );
  }

  return (
    <FlashlightSurface
      className="rounded-2xl p-6 sm:p-8 lg:p-9 bg-white overflow-hidden"
      style={{
        border: '1px solid var(--jaris-border-soft)',
        boxShadow: 'var(--shadow-card-elevated)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: 'var(--jaris-orange)' }}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-5" noValidate>
        {submitError && (
          <div
            role="alert"
            className="rounded-lg px-4 py-3"
            style={{
              backgroundColor: 'var(--jaris-danger-bg)',
              border: '1px solid var(--jaris-danger-border)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              color: 'var(--jaris-danger)',
            }}
          >
            {submitError}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="jaris-name" style={FIELD_LABEL_STYLE}>
              {CONTACT_CONTENT.form.labels.name}
            </label>
            <input
              id="jaris-name"
              type="text"
              autoComplete="name"
              {...register('name')}
              className="focus:border-[#d96b10]"
              style={INPUT_STYLE}
            />
            {errors.name && <p style={ERROR_TEXT_STYLE}>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="jaris-email" style={FIELD_LABEL_STYLE}>
              {CONTACT_CONTENT.form.labels.email}
            </label>
            <input
              id="jaris-email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className="focus:border-[#d96b10]"
              style={INPUT_STYLE}
            />
            {errors.email && <p style={ERROR_TEXT_STYLE}>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="jaris-phone" style={FIELD_LABEL_STYLE}>
              {CONTACT_CONTENT.form.labels.phone}
            </label>
            <input
              id="jaris-phone"
              type="tel"
              autoComplete="tel"
              placeholder={CONTACT_CONTENT.form.phonePlaceholder}
              {...register('phone')}
              className="focus:border-[#d96b10]"
              style={INPUT_STYLE}
            />
            {errors.phone && <p style={ERROR_TEXT_STYLE}>{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="jaris-company" style={FIELD_LABEL_STYLE}>
              {CONTACT_CONTENT.form.labels.company}
            </label>
            <input
              id="jaris-company"
              type="text"
              autoComplete="organization"
              {...register('company')}
              className="focus:border-[#d96b10]"
              style={INPUT_STYLE}
            />
            {errors.company && <p style={ERROR_TEXT_STYLE}>{errors.company.message}</p>}
          </div>

          <div>
            <label htmlFor="jaris-role" style={FIELD_LABEL_STYLE}>
              {CONTACT_CONTENT.form.labels.role}
            </label>
            <select
              id="jaris-role"
              {...register('role')}
              defaultValue=""
              className="focus:border-[#d96b10]"
              style={{ ...INPUT_STYLE, cursor: 'pointer' }}
            >
              <option value="" disabled>
                {CONTACT_CONTENT.form.labels.selectDefault}
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {errors.role && <p style={ERROR_TEXT_STYLE}>{errors.role.message}</p>}
          </div>

          <div>
            <label htmlFor="jaris-companySize" style={FIELD_LABEL_STYLE}>
              {CONTACT_CONTENT.form.labels.companySize}
            </label>
            <select
              id="jaris-companySize"
              {...register('companySize')}
              defaultValue=""
              className="focus:border-[#d96b10]"
              style={{ ...INPUT_STYLE, cursor: 'pointer' }}
            >
              <option value="" disabled>
                {CONTACT_CONTENT.form.labels.selectDefault}
              </option>
              {SIZES.map((sz) => (
                <option key={sz} value={sz}>
                  {sz}
                </option>
              ))}
            </select>
            {errors.companySize && (
              <p style={ERROR_TEXT_STYLE}>{errors.companySize.message}</p>
            )}
          </div>
        </div>

        <div>
          <span style={FIELD_LABEL_STYLE}>
            {CONTACT_CONTENT.form.labels.interests}
          </span>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((item) => {
              const active = selectedInterests.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleInterest(item)}
                  aria-pressed={active}
                  className="px-3.5 py-2 rounded-lg transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    border: `1px solid ${
                      active ? 'var(--jaris-orange)' : 'var(--jaris-border)'
                    }`,
                    backgroundColor: active
                      ? 'var(--jaris-orange-bg)'
                      : 'var(--jaris-white)',
                    color: active ? 'var(--jaris-orange)' : 'var(--jaris-ink-muted)',
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {errors.interests && (
            <p style={ERROR_TEXT_STYLE}>{errors.interests.message}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="jaris-message" style={{ ...FIELD_LABEL_STYLE, marginBottom: 0 }}>
              {CONTACT_CONTENT.form.labels.message}
            </label>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--jaris-ink-faint)',
              }}
            >
              {messageValue.length}/500
            </span>
          </div>
          <textarea
            id="jaris-message"
            rows={3}
            maxLength={500}
            {...register('message')}
            className="focus:border-[#d96b10]"
            style={{ ...INPUT_STYLE, resize: 'none', minHeight: 88 }}
          />
          {errors.message && <p style={ERROR_TEXT_STYLE}>{errors.message.message}</p>}
        </div>

        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              {...register('consent')}
              className="mt-1 shrink-0 w-4 h-4 rounded"
              style={{ accentColor: 'var(--jaris-orange)' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                color: 'var(--jaris-ink-muted)',
                lineHeight: 1.55,
              }}
            >
              {CONTACT_CONTENT.form.labels.consent}
            </span>
          </label>
          {errors.consent && <p style={ERROR_TEXT_STYLE}>{errors.consent.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-shimmer w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-white disabled:opacity-60 cursor-pointer"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.82rem',
            letterSpacing: '0.09em',
            backgroundColor: 'var(--jaris-orange)',
            border: 'none',
          }}
        >
          {isSubmitting ? (
            <LoaderCircle size={16} className="animate-spin" />
          ) : (
            <Send size={15} />
          )}
          {isSubmitting
            ? CONTACT_CONTENT.form.labels.submitting
            : CONTACT_CONTENT.form.labels.submit}
        </button>
      </form>
    </FlashlightSurface>
  );
}

export function ContactSection() {
  const { ref, visible } = useRevealOnce(0.12);

  return (
    <section
      id="contato"
      ref={ref}
      className="dobra-section py-24 lg:py-28"
      style={{ backgroundColor: 'var(--jaris-white)' }}
    >
      {/* Light Surface Dominance (BRANCO > LARANJA > AZUL-MARINHO) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none dot-matrix-bg opacity-65"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217, 107, 16, 0.12) 0%, transparent 62%)',
        }}
      />

      <div className="relative z-10 dobra-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left Institutional Narrative */}
          <div className="lg:col-span-5">
            <SectionHeader
              index="09"
              eyebrow={CONTACT_CONTENT.eyebrow}
              title={
                <>
                  {CONTACT_CONTENT.titleStart}{' '}
                  <span style={{ color: 'var(--jaris-orange)' }}>
                    {CONTACT_CONTENT.titleHighlight}
                  </span>
                </>
              }
              subtitle={CONTACT_CONTENT.subtitle}
              visible={visible}
            />

            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22, ease: EASE_EXPO }}
              className="flex flex-col gap-3.5 mt-9"
            >
              {CONTACT_CONTENT.checklist.map((item) => (
                <li
                  key={item}
                  className="jaris-row flex items-center gap-3.5 rounded-xl p-3 bg-[#fafafa] border border-[#f3f4f6]"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--jaris-orange-bg)',
                      border: '1px solid rgba(217, 107, 16, 0.25)',
                    }}
                  >
                    <Check
                      size={12}
                      color="var(--jaris-orange)"
                      strokeWidth={2.6}
                    />
                  </span>
                  <span
                    className="jaris-row-inner"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: 'var(--jaris-navy)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.16, ease: EASE_EXPO }}
            className="lg:col-span-7"
          >
            <DemoContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
