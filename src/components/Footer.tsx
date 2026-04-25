import { Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../../logo.webp";

const BETA_URL = "https://tally.so/r/rjrG2p";
const CONTACT_FORM_URL = "/contact#contact-form";

export const Footer = () => {
  const { language } = useLanguage();

  const labels =
    language === "en"
      ? {
          problem: "Problem",
          process: "Process",
          data: "Data",
          blog: "Blog",
          crew: "Crew",
          contact: "Contact",
          beta: "Beta Testing",
          email: "Email",
        }
      : {
          problem: "Проблема",
          process: "Процесс",
          data: "Данные",
          blog: "Блог",
          crew: "Crew",
          contact: "Контакт",
          beta: "Бета-тестинг",
          email: "Почта",
        };

  return (
    <footer className="bg-primary border-t-2 border-accent/60 py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-5">
        <Link to="/" className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity" aria-label="Kyshik home">
          <img src={logo} alt="" className="block h-12 w-auto object-contain" loading="lazy" />
          <span className="text-2xl font-bold text-white leading-none">
            kyshik<span className="text-accent">.com</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-white/38">
          <a href="/#about" className="hover:text-white transition-colors">{labels.problem}</a>
          <a href="/#how" className="hover:text-white transition-colors">{labels.process}</a>
          <a href="/#proof" className="hover:text-white transition-colors">{labels.data}</a>
          <Link to="/blog" className="hover:text-white transition-colors">{labels.blog}</Link>
          <Link to="/crew" className="hover:text-white transition-colors">{labels.crew}</Link>
          <Link to="/contact" className="hover:text-white transition-colors">{labels.contact}</Link>
          <Link to={CONTACT_FORM_URL} className="hover:text-white transition-colors">{labels.email}</Link>
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-white/80 text-sm transition-colors"
          >
            <Sparkles size={15} />
            {labels.beta}
          </a>
          <Link to={CONTACT_FORM_URL} className="flex items-center gap-1.5 text-white/40 hover:text-white/80 text-sm transition-colors">
            <Mail size={15} />
            hello@kyshik.com
          </Link>
        </div>
        <p className="text-white/25 text-xs tracking-widest uppercase">
          © 2026 kyshik.com
        </p>
      </div>
    </footer>
  );
};
