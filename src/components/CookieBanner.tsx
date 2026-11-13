import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { COOKIE_CONTENT } from '../data/landingContent';
import { EASE_EXPO } from '../lib/motion';

function readInitialCookieVisibility(): boolean {
  try {
    let stored = localStorage.getItem(COOKIE_CONTENT.storageKey);
    if (!stored) {
      const legacy = localStorage.getItem(COOKIE_CONTENT.legacyKey);
      if (legacy) {
        localStorage.setItem(COOKIE_CONTENT.storageKey, legacy);
        localStorage.removeItem(COOKIE_CONTENT.legacyKey);
        stored = legacy;
      }
    }
    return !stored;
  } catch {
    return true;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(readInitialCookieVisibility);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONTENT.storageKey, 'accepted');
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_EXPO }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none"
        >
          <div
            className="max-w-3xl mx-auto pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 px-5 py-4"
            style={{
              backgroundColor: 'var(--jaris-navy)',
              borderRadius: 14,
              border: '1px solid rgba(217, 107, 16, 0.28)',
              boxShadow: '0 12px 40px rgba(14, 31, 61, 0.35)',
            }}
          >
            <div
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl"
              style={{ backgroundColor: 'rgba(217, 107, 16, 0.14)' }}
            >
              <Cookie size={18} color="var(--jaris-orange)" strokeWidth={1.8} />
            </div>

            <div className="flex-1 min-w-0">
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.76rem',
                  color: 'rgba(255, 255, 255, 0.88)',
                  lineHeight: 1.65,
                  fontWeight: 400,
                }}
              >
                {COOKIE_CONTENT.message}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <motion.button
                type="button"
                onClick={handleAccept}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer whitespace-nowrap"
                style={{
                  backgroundColor: 'var(--jaris-orange)',
                  color: '#ffffff',
                  borderRadius: 8,
                  padding: '8px 18px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: 'none',
                }}
              >
                {COOKIE_CONTENT.acceptLabel}
              </motion.button>

              <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label={COOKIE_CONTENT.closeAriaLabel}
                className="flex items-center p-1.5 rounded-md text-white/40 hover:text-white/80 transition-colors cursor-pointer bg-transparent border-0"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
