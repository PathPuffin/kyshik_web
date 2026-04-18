const TELEGRAM_URL = "https://t.me/kyshikbot";

const TgIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.25-2.04 9.61c-.15.66-.54.82-1.08.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.21-.05-.33-.37-.12L7.26 14.34l-2.94-.92c-.64-.2-.65-.64.14-.95l11.48-4.43c.53-.19 1 .13.62.21z" />
  </svg>
);

export const Footer = () => (
  <footer className="bg-primary border-t-2 border-accent/60 py-10">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-5">
      <a href="/" className="text-2xl font-bold text-white/75 hover:text-white transition-colors">
        kyshik<span className="text-accent">.com</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-white/38">
        <a href="/#about" className="hover:text-white transition-colors">Проблема</a>
        <a href="/#how" className="hover:text-white transition-colors">Процесс</a>
        <a href="/#proof" className="hover:text-white transition-colors">Данные</a>
        <a href="/blog" className="hover:text-white transition-colors">Блог</a>
        <a href="/crew" className="hover:text-white transition-colors">Crew</a>
        <a href="/contact" className="hover:text-white transition-colors">Контакт</a>
      </nav>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-white/40 hover:text-white/80 text-sm transition-colors"
      >
        <TgIcon />
        Телеграм
      </a>
      <p className="text-white/25 text-xs tracking-widest uppercase">
        © 2026 kyshik.com
      </p>
    </div>
  </footer>
);
