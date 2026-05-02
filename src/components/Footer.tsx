import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Gem,
  Mail,
  Search,
  Sparkles,
  Stars,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../../logo.webp";

const BETA_URL = "/beta-test";
const CONTACT_EMAIL = "salem@kyshik.com";
const CONTACT_FORM_URL = "/contact#contact-form";
const WEB3FORMS_ACCESS_KEY = "f117ad90-c89c-4844-b9ce-3dae5a63b2de";

const askPrompt =
  "I want to understand Kyshik and how it helps create verified digital passports for lost, stray, rescued, and undocumented animals. Summarize what Kyshik does, how its phone-based animal sightings and visual matching create longitudinal animal records, and why this matters for clinics, insurers, shelters, and communities. Use information from their website: https://kyshik.com/";

const GOOGLE_FOOTER_URL =
  `https://www.google.com/aimode?hl=en-US&q=${encodeURIComponent("I want to understand how Pathpuffin works as an engineering studio. Summarize what Pathpuffin does, their philosophy of engineering with soul, and their core principles. Use information from their website: https://pathpuffin.com/")}`;

const buildAskUrl = (base: string, param: string) =>
  `${base}?${param}=${encodeURIComponent(askPrompt)}`;

const askAiLinks = [
  { label: "ChatGPT", href: buildAskUrl("https://chatgpt.com/", "q"), Icon: Bot },
  { label: "Gemini", href: buildAskUrl("https://gemini.google.com/app", "prompt"), Icon: Gem },
  { label: "Claude", href: buildAskUrl("https://claude.ai/new", "q"), Icon: Sparkles },
  { label: "Perplexity", href: buildAskUrl("https://www.perplexity.ai/search", "q"), Icon: BrainCircuit },
  { label: "Google", href: GOOGLE_FOOTER_URL, Icon: Search },
];

export const Footer = () => {
  const { language } = useLanguage();
  const [newsletter, setNewsletter] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const labels = useMemo(
    () =>
      language === "en"
        ? {
            newsletter: "Join our newsletter for Kyshik product updates",
            fullName: "Full name",
            email: "Email",
            subscribe: "Subscribe",
            subscribing: "Sending...",
            subscribed: "Subscribed",
            askAi: "Ask AI About Us",
            contact: "Contact",
            follow: "Follow",
            resources: "Resources",
            legal: "Legal",
            beta: "Beta Testing",
            blog: "Blog",
            crew: "Crew",
            privacy: "Privacy",
            cookies: "Cookies",
          }
        : {
            newsletter: "Подпишитесь на новости Kyshik",
            fullName: "Полное имя",
            email: "Email",
            subscribe: "Подписаться",
            subscribing: "Отправляем...",
            subscribed: "Подписано",
            askAi: "Спросить AI о нас",
            contact: "Контакт",
            follow: "Следить",
            resources: "Ресурсы",
            legal: "Правовое",
            beta: "Бета-тест",
            blog: "Блог",
            crew: "Команда",
            privacy: "Privacy",
            cookies: "Cookies",
          },
    [language],
  );

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("name", newsletter.name);
      payload.append("email", newsletter.email);
      payload.append("subject", "Kyshik newsletter subscription");
      payload.append("message", `Newsletter subscription request from ${newsletter.name} (${newsletter.email}).`);
      payload.append("from_name", "Kyshik Newsletter Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit newsletter form.");
      }

      setIsSubmitted(true);
      setNewsletter({ name: "", email: "" });
    } catch {
      window.alert(language === "en" ? "Could not send subscription right now." : "Не удалось отправить подписку.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="overflow-hidden border-t-2 border-accent/70 bg-primary text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(360px,0.95fr)_minmax(0,1.55fr)] lg:gap-12 lg:py-14 xl:gap-16">
        <div className="flex min-w-0 flex-col justify-between gap-10">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-accent">
              Kyshik newsletter
            </p>
            <h2 className="max-w-xl text-[2.4rem] font-extrabold leading-[0.94] tracking-normal sm:text-[3.6rem] lg:text-[4.2rem]">
              {labels.newsletter}
            </h2>
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end lg:grid-cols-1 xl:grid-cols-[1fr_1fr_auto]"
            >
              <input
                required
                value={newsletter.name}
                onChange={(event) => setNewsletter((prev) => ({ ...prev, name: event.target.value }))}
                placeholder={labels.fullName}
                className="min-w-0 border-0 border-b-2 border-white/24 bg-transparent px-0 py-3 text-base text-white outline-none placeholder:text-white/42 focus:border-accent"
              />
              <input
                required
                type="email"
                value={newsletter.email}
                onChange={(event) => setNewsletter((prev) => ({ ...prev, email: event.target.value }))}
                placeholder={labels.email}
                className="min-w-0 border-0 border-b-2 border-white/24 bg-transparent px-0 py-3 text-base text-white outline-none placeholder:text-white/42 focus:border-accent"
              />
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="border border-accent bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-[7px_7px_0_rgba(255,255,255,0.1)] transition-colors hover:bg-white hover:text-primary"
              >
                {isSubmitted ? labels.subscribed : isSubmitting ? labels.subscribing : labels.subscribe}
              </button>
            </form>
          </div>

          <Link to="/" className="flex w-fit items-center gap-2 opacity-90 transition-opacity hover:opacity-100" aria-label="Kyshik home">
            <img src={logo} alt="" className="block h-12 w-auto object-contain" loading="lazy" />
            <span className="text-2xl font-extrabold leading-none">
              kyshik<span className="text-accent">.com</span>
            </span>
          </Link>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <section className="min-h-44 border border-white/14 bg-white/7 p-5 shadow-[8px_8px_0_rgba(255,255,255,0.06)] sm:col-span-2">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <h3 className="text-lg font-extrabold">{labels.askAi}</h3>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {askAiLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${labels.askAi}: ${label}`}
                    title={label}
                    className="inline-flex h-11 w-11 items-center justify-center border border-white/18 bg-black/18 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="min-h-44 border border-white/14 bg-white/7 p-5 shadow-[8px_8px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-lg font-extrabold">{labels.contact}</h3>
            <div className="mt-5 space-y-3 text-sm text-white/62">
              <Link to={CONTACT_FORM_URL} className="flex items-center gap-2 break-all hover:text-white">
                <Mail className="h-4 w-4 flex-none text-accent" />
                {CONTACT_EMAIL}
              </Link>
              <Link to={BETA_URL} className="flex items-center gap-2 hover:text-white">
                <Stars className="h-4 w-4 text-accent" />
                {labels.beta}
              </Link>
            </div>
          </section>

          <section className="min-h-44 border border-white/14 bg-white/7 p-5 shadow-[8px_8px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-lg font-extrabold">{labels.follow}</h3>
            <div className="mt-5 space-y-3 text-sm text-white/62">
              <a href="https://www.instagram.com/kyshikapp/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                Instagram
                <ArrowUpRight className="h-4 w-4 text-accent" />
              </a>
              <a href="https://www.threads.com/@kyshikapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                Threads
                <ArrowUpRight className="h-4 w-4 text-accent" />
              </a>
            </div>
          </section>

          <section className="min-h-44 border border-white/14 bg-white/7 p-5 shadow-[8px_8px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-lg font-extrabold">{labels.resources}</h3>
            <div className="mt-5 space-y-3 text-sm text-white/62">
              <Link to="/blog" className="block hover:text-white">{labels.blog}</Link>
              <Link to="/crew" className="block hover:text-white">{labels.crew}</Link>
            </div>
          </section>

          <section className="min-h-44 border border-white/14 bg-white/7 p-5 shadow-[8px_8px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-lg font-extrabold">{labels.legal}</h3>
            <div className="mt-5 space-y-3 text-sm text-white/62">
              <span className="block">{labels.privacy}</span>
              <span className="block">{labels.cookies}</span>
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-6 text-xs uppercase tracking-[0.18em] text-white/34 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>Kyshik: See to be Seen</p>
        <p>©2026 Kyshik</p>
      </div>
    </footer>
  );
};
