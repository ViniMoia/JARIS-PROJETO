import { FOOTER_CONTENT } from '../data/landingContent';

function LinkedInIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', Icon: LinkedInIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
] as const;

export function FooterSection() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--jaris-navy)',
        color: '#ffffff',
        borderTop: '3px solid var(--jaris-orange)',
      }}
    >
      <div className="dobra-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <div className="lg:col-span-1">
            {/* Crisp white badge integrates logo-jaris.jpg cleanly on navy */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white overflow-hidden mb-5 shadow-md">
              <img
                src="/logo-jaris.jpg"
                alt="JARIS"
                className="w-full h-full object-cover scale-[1.18] block"
              />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: '0.92rem',
                lineHeight: 1.5,
                color: '#ffffff',
                marginBottom: 10,
              }}
            >
              {FOOTER_CONTENT.headline}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '0.84rem',
                lineHeight: 1.6,
                color: '#94a3b8',
                marginBottom: 22,
              }}
            >
              {FOOTER_CONTENT.subheadline}
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  onClick={(e) => {
                    if (href === '#') e.preventDefault();
                  }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#cbd5e1] transition-colors hover:bg-white/10 hover:text-white"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.14)' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_CONTENT.columns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.68rem',
                  color: '#9ca3af',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                {col.title}
              </p>

              <ul className="flex flex-col gap-3">
                {col.links.map((link) => {
                  const isExternal = Boolean(link.external);
                  const isHashPlaceholder = link.href === '#';
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        onClick={(e) => {
                          if (isHashPlaceholder) e.preventDefault();
                        }}
                        className="text-[#cbd5e1] hover:text-white transition-colors duration-150"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 400,
                          fontSize: '0.86rem',
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '0.76rem',
              color: '#94a3b8',
            }}
          >
            {FOOTER_CONTENT.copyright}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '0.76rem',
              color: '#94a3b8',
            }}
          >
            {FOOTER_CONTENT.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
}

