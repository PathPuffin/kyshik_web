import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Menu, Sparkles, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const BETA_URL = "https://tally.so/r/rjrG2p";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Блог", href: "/blog" },
  { label: "Crew", href: "/crew" },
];

const NAV_ITEMS_EN: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Crew", href: "/crew" },
];

export const Navbar = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const navItems = language === "en" ? NAV_ITEMS_EN : NAV_ITEMS;
  const betaLabel = language === "en" ? "Beta Testing" : "Бета тестинг";
  const toggleMenuLabel = language === "en" ? "Toggle menu" : "Открыть меню";

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

  useEffect(() => {
    setVisible(true);
    setMenuOpen(false);
    lastY.current = window.scrollY;
    setScrolled(window.scrollY > 80);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-colors duration-500 border-b ${
          scrolled || menuOpen
            ? "bg-white/88 backdrop-blur-xl border-black/15"
            : "bg-white/20 backdrop-blur-sm border-transparent"
        }`}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-primary"
          >
            kyshik<span className="text-accent">.com</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex h-10 min-w-12 items-center justify-center rounded-full border-2 border-black/80 bg-white text-[11px] font-extrabold tracking-[0.14em] text-primary shadow-[0_8px_18px_rgba(0,0,0,0.16)]"
              aria-label={language === "en" ? "Switch to Russian" : "Switch to English"}
            >
              {language === "en" ? "EN" : "RU"}
            </button>
            <motion.a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-white px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold shadow-[0_8px_20px_rgba(255,59,48,0.36)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={16} />
              <span className="hidden sm:inline">{betaLabel}</span>
            </motion.a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-primary"
              aria-label={toggleMenuLabel}
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
        {navItems.map(({ label, href, external }) => (
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
