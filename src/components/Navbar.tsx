import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Mail, Menu, Sparkles, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../../logo.webp";

const BETA_URL = "/beta-test";
const CONTACT_FORM_URL = "/contact#contact-form";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS_RU: NavItem[] = [
  { label: "Блог", href: "/blog" },
  { label: "Команда", href: "/crew" },
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
  const navItems = language === "en" ? NAV_ITEMS_EN : NAV_ITEMS_RU;
  const betaLabel = language === "en" ? "Beta Testing" : "Бета-тест";
  const toggleMenuLabel = language === "en" ? "Toggle menu" : "Открыть меню";
  const emailLabel = language === "en" ? "Contact us" : "Связаться";

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 60);
      setScrolled(y > 70);
      lastY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setVisible(true);
    setMenuOpen(false);
    lastY.current = window.scrollY;
    setScrolled(window.scrollY > 70);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
        animate={{ y: visible ? 0 : "-125%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`relative mx-auto box-border flex w-full max-w-7xl items-center justify-between gap-3 border-b bg-black/45 px-3 py-3 pr-14 text-white backdrop-blur-sm transition-colors duration-300 sm:px-4 md:pr-4 ${
            scrolled || menuOpen ? "border-white/48 bg-black/62" : "border-white/28"
          }`}
        >
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Kyshik home">
            <img src={logo} alt="" className="block h-9 w-auto object-contain sm:h-11" loading="eager" />
            <span className="truncate text-xl font-extrabold leading-none tracking-normal text-white sm:text-2xl">
              kyshik<span className="text-accent">.com</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="border-b border-white/45 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/86 transition-colors hover:border-accent hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={CONTACT_FORM_URL}
              className="border-b border-white/45 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/86 transition-colors hover:border-accent hover:text-white"
            >
              {language === "en" ? "Email" : "Почта"}
            </Link>
          </div>

          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-none items-center gap-2 md:static md:translate-y-0">
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden h-9 min-w-11 items-center justify-center border border-white/32 bg-transparent px-3 text-[10px] font-extrabold tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-primary md:flex"
              aria-label={language === "en" ? "Switch to Russian" : "Switch to English"}
            >
              {language === "en" ? "EN" : "RU"}
            </button>
            <Link
              to={CONTACT_FORM_URL}
              className="hidden h-9 items-center justify-center gap-2 border border-white/32 bg-transparent px-4 text-xs font-extrabold text-white transition-colors hover:bg-white hover:text-primary lg:flex"
            >
              <Mail size={15} />
              {emailLabel}
            </Link>
            <motion.a
              href={BETA_URL}
              className="hidden h-9 items-center justify-center gap-2 bg-accent px-4 text-xs font-extrabold text-white shadow-[6px_6px_0_rgba(0,0,0,0.3)] sm:flex"
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={15} />
              <span>{betaLabel}</span>
            </motion.a>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center border border-white/32 bg-transparent text-white md:hidden"
              aria-label={toggleMenuLabel}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className="fixed inset-0 z-40 flex flex-col bg-black px-5 pb-10 pt-28 text-white md:hidden"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        transition={{ duration: 0.22 }}
      >
        <div className="flex flex-col border-y border-white/14">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/14 py-5 text-3xl font-extrabold leading-none text-white/76 transition-colors last:border-b-0 hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            to={CONTACT_FORM_URL}
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/14 py-5 text-3xl font-extrabold leading-none text-white/76 transition-colors hover:text-white"
          >
            {language === "en" ? "Email" : "Почта"}
          </Link>
        </div>
        <motion.a
          href={BETA_URL}
          onClick={() => setMenuOpen(false)}
          className="mt-7 inline-flex items-center justify-center gap-2 bg-accent px-5 py-4 text-sm font-extrabold text-white"
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles size={18} />
          {betaLabel}
        </motion.a>
        <button
          type="button"
          onClick={toggleLanguage}
          className="mt-4 inline-flex items-center justify-center border border-white/18 bg-white/8 px-5 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white"
        >
          {language === "en" ? "Switch to RU" : "Switch to EN"}
        </button>
      </motion.div>
    </>
  );
};
