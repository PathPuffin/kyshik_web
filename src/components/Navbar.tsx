import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const TELEGRAM_URL = "https://t.me/kyshikbot";
const VOLUNTEER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqx_xST3RUvYqF-gfLgvMcVR2SqPcQ9Vmb_KbziWUIwMLisw/viewform?usp=dialog";

const TgIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.25-2.04 9.61c-.15.66-.54.82-1.08.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.21-.05-.33-.37-.12L7.26 14.34l-2.94-.92c-.64-.2-.65-.64.14-.95l11.48-4.43c.53-.19 1 .13.62.21z" />
  </svg>
);

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 60);
      setScrolled(y > 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-colors duration-500 border-b ${
          scrolled || menuOpen
            ? "bg-black/70 backdrop-blur-xl border-accent/40"
            : "bg-transparent border-transparent"
        }`}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-primary [text-shadow:0_1px_0_rgba(255,255,255,0.22),0_3px_10px_rgba(0,0,0,0.25)]"
          >
            kyshik<span className="text-accent">.com</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#about"
              className="text-xs font-medium uppercase tracking-widest text-secondary hover:text-primary transition-colors"
            >
              Туралы
            </a>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-xs shadow-[0_8px_20px_rgba(255,59,48,0.34)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Volunteering
            </motion.a>
            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-tg text-white px-5 py-2.5 rounded-full text-xs shadow-[0_8px_20px_rgba(0,167,232,0.36)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <TgIcon />
              Телеграм
            </motion.a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-primary"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className="fixed inset-0 z-40 bg-surface md:hidden flex flex-col px-8 pt-28 pb-12"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        transition={{ duration: 0.22 }}
      >
        {[
          { label: "Туралы", href: "/#about" },
          { label: "Volunteering", href: VOLUNTEER_FORM_URL, external: true },
          { label: "Телеграм", href: TELEGRAM_URL, external: true },
        ].map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="font-serif text-4xl font-light text-primary/70 hover:text-primary py-4 border-b border-border transition-colors"
          >
            {label}
          </a>
        ))}
      </motion.div>
    </>
  );
};
