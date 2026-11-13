import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { EXTERNAL_URLS, NAV_LINKS, type NavLinkItem } from '../data/landingContent';
import { EASE_EXPO } from '../lib/motion';

function NavLink({
  item,
  activeSection,
  onClick,
  mobile = false,
}: {
  item: NavLinkItem;
  activeSection: string;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const isAnchor = item.href.startsWith('#');
  const isActive = isAnchor && activeSection === item.href.slice(1);

  const baseClass = mobile
    ? 'block w-full py-3.5 text-left transition-colors duration-200'
    : 'relative px-3.5 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap';

  const style: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontWeight: isActive ? 600 : 500,
    fontSize: mobile ? '0.94rem' : '0.82rem',
    color: isActive ? 'var(--jaris-orange)' : 'var(--jaris-ink-body)',
  };

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${baseClass} hover:text-[#d96b10]`}
        style={style}
      >
        {item.label}
      </a>
    );
  }

  return (
    <a
      href={item.href}
      onClick={onClick}
      className={`${baseClass} hover:text-[#d96b10]`}
      style={style}
    >
      {item.label}
      {!mobile && isActive && (
        <motion.span
          layoutId="jaris-nav-indicator"
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="absolute left-3.5 right-3.5 bottom-0.5 h-[2px] rounded-full"
          style={{ backgroundColor: 'var(--jaris-orange)' }}
        />
      )}
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sistema');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['sistema', 'desafio', 'modulos', 'pdca', 'fluxos', 'insights', 'diferenciais', 'roadmap', 'contato'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Floating Glass Header */}
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
        className="fixed inset-x-0 top-0 z-50 hidden lg:block transition-all duration-500"
        style={{
          padding: scrolled ? '10px 0' : '18px 0',
        }}
      >
        <div className="dobra-container">
          <div
            className="flex items-center justify-between transition-all duration-500 px-5 py-2.5"
            style={{
              borderRadius: scrolled ? 16 : 12,
              backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.84)',
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              border: scrolled
                ? '1px solid rgba(229, 231, 235, 0.95)'
                : '1px solid rgba(229, 231, 235, 0.65)',
              boxShadow: scrolled
                ? '0 12px 32px rgba(14, 31, 61, 0.07)'
                : '0 2px 10px rgba(14, 31, 61, 0.02)',
            }}
          >
            <a
              href="#sistema"
              aria-label="Página inicial Jaris"
              className="flex items-center shrink-0 h-10 w-10 rounded-lg overflow-hidden bg-white focus-visible:outline-none"
            >
              <img
                src="/logo-jaris.jpg"
                alt="JARIS"
                className="w-full h-full object-cover scale-[1.2] block"
              />
            </a>

            <nav aria-label="Navegação principal" className="flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  activeSection={activeSection}
                />
              ))}

              <div className="h-5 w-px mx-2 bg-[#e5e7eb]" aria-hidden="true" />

              <a
                href={EXTERNAL_URLS.login}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 transition-all duration-300 hover:bg-[#f0f3f8] whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: 'var(--jaris-navy)',
                  borderRadius: 10,
                  border: '1px solid rgba(14, 31, 61, 0.16)',
                  backgroundColor: 'transparent',
                }}
              >
                ACESSAR
              </a>

              <a
                href="#contato"
                className="btn-shimmer ml-2 px-5 py-2.5 text-white whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  backgroundColor: 'var(--jaris-orange)',
                  borderRadius: 10,
                }}
              >
                SOLICITAR DEMO
              </a>
            </nav>
          </div>
        </div>

        {/* Hairline Scroll Progress */}
        <motion.div
          style={{
            scaleX,
            transformOrigin: '0% 50%',
            backgroundColor: 'var(--jaris-orange)',
          }}
          className="h-[2px] w-full fixed top-0 left-0 right-0 z-[60] pointer-events-none"
        />
      </motion.header>

      {/* Mobile & Tablet Header */}
      <header className="fixed inset-x-0 top-0 z-50 lg:hidden glass-nav border-b border-[#eaecf0]">
        <motion.div
          style={{
            scaleX,
            transformOrigin: '0% 50%',
            backgroundColor: 'var(--jaris-orange)',
          }}
          className="h-[2px] w-full"
        />
        <div className="flex items-center justify-between px-5 sm:px-8 py-3">
          <a
            href="#sistema"
            aria-label="Página inicial Jaris"
            className="flex items-center shrink-0 h-9 w-9 rounded-lg overflow-hidden bg-white"
          >
            <img
              src="/logo-jaris.jpg"
              alt="JARIS"
              className="w-full h-full object-cover scale-[1.2] block"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="p-2 rounded-lg border border-[#e5e7eb] bg-white text-[#0e1f3d] hover:bg-[#f5f5f5] transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              aria-label="Navegação móvel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_EXPO }}
              className="overflow-hidden bg-white border-t border-[#f3f4f6] shadow-lg"
            >
              <div className="px-6 pb-6 pt-2 flex flex-col">
                {NAV_LINKS.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04, ease: EASE_EXPO }}
                    className="border-b border-[#f3f4f6]"
                  >
                    <NavLink
                      item={item}
                      activeSection={activeSection}
                      mobile
                      onClick={() => setMobileOpen(false)}
                    />
                  </motion.div>
                ))}

                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href={EXTERNAL_URLS.login}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-center transition-colors hover:bg-[#f0f3f8]"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      color: 'var(--jaris-navy)',
                      borderRadius: 10,
                      border: '1px solid rgba(14, 31, 61, 0.16)',
                    }}
                  >
                    ACESSAR
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileOpen(false)}
                    className="btn-shimmer py-3 text-white text-center"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      backgroundColor: 'var(--jaris-orange)',
                      borderRadius: 10,
                    }}
                  >
                    SOLICITAR DEMONSTRAÇÃO
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
