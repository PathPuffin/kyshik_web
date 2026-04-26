import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const CONTACT_FORM_ANCHOR = "#contact-form";
const RECIPIENT = "salem@kyshik.com";
const CONTACT_FORM_URL = "/contact#contact-form";
const WEB3FORMS_ACCESS_KEY = "f117ad90-c89c-4844-b9ce-3dae5a63b2de";

type ContactForm = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const inputClass =
    "w-full rounded-lg border-2 border-black/25 bg-white px-4 py-3 text-sm text-primary placeholder:text-secondary/50 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20";

  const t =
    language === "en"
      ? {
          sectionTag: "Contact",
          title: "Connect with Kyshik",
          desc: "Write to us if you want to help with pilots, partnerships, or data for stray animal protection.",
          leftTag: "Connection",
          leftTitle: "Let's start a conversation",
          leftDesc: "We are open to pilots, volunteers, partners, and people who want to make animal counting more honest.",
          location: "Kazakhstan",
          privacy: "No public exact coordinates",
          sentTitle: "Message sent",
          sentDesc: "Thank you. Your message was sent to salem@kyshik.com.",
          formTitle: "Tell us how you want to help",
          name: "Name *",
          org: "Organization",
          email: "Email *",
          message: "Message *",
          namePlaceholder: "Niyaz",
          orgPlaceholder: "Kyshik",
          emailPlaceholder: "salem@kyshik.com",
          messagePlaceholder: "I want to discuss a city pilot...",
          sending: "Sending...",
          send: "Send",
          alert: "Could not send your message right now. Please try again.",
        }
      : {
          sectionTag: "Контакт",
          title: "Подключиться к Kyshik",
          desc: "Напишите нам, если хотите помочь с пилотом, партнерством или данными по бездомным животным.",
          leftTag: "Связь",
          leftTitle: "Начнем разговор",
          leftDesc: "Мы открыты к пилотам, волонтерам, партнерам и людям, которые хотят сделать учет животных честнее.",
          location: "Казахстан",
          privacy: "Без публичных точных координат",
          sentTitle: "Сообщение отправлено",
          sentDesc: "Спасибо. Ваше сообщение отправлено на salem@kyshik.com.",
          formTitle: "Расскажите, чем хотите помочь",
          name: "Имя *",
          org: "Организация",
          email: "Email *",
          message: "Сообщение *",
          namePlaceholder: "Нияз",
          orgPlaceholder: "Kyshik",
          emailPlaceholder: "salem@kyshik.com",
          messagePlaceholder: "Хочу обсудить пилот в городе...",
          sending: "Отправляем...",
          send: "Отправить",
          alert: "Не удалось отправить сообщение. Попробуйте еще раз.",
        };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData(e.currentTarget);
      payload.append("subject", `Kyshik contact - ${form.name}`);
      payload.append("from_name", "Kyshik Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit form.");
      }

      setSent(true);
      setForm({ name: "", company: "", email: "", message: "" });
    } catch {
      window.alert(t.alert);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (location.hash !== CONTACT_FORM_ANCHOR) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <section className="relative min-h-[calc(100svh-4rem)] bg-[#f8f8f5] py-20 sm:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-18 bg-[repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
            {t.sectionTag}
          </p>
          <h1 className="text-[2.45rem] md:text-[4.25rem] font-bold text-primary leading-[0.98]">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-secondary">
            {t.desc}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] overflow-hidden rounded-lg border-2 border-black/70 bg-white shadow-[0_10px_0_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <div className="bg-primary p-8 sm:p-10 lg:p-14 text-white flex flex-col justify-between gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55 mb-5">
                {t.leftTag}
              </p>
              <h2 className="text-[2.1rem] md:text-[3.1rem] font-bold leading-[0.98]">
                {t.leftTitle}
              </h2>
              <p className="text-white/70 text-base leading-7 mt-5 max-w-md">
                {t.leftDesc}
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                {t.location}
              </p>
              <p className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-accent" />
                {t.privacy}
              </p>
              <Link
                to={CONTACT_FORM_URL}
                className="inline-flex items-center gap-3 text-white/80 underline-offset-2 hover:text-white hover:underline transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                {RECIPIENT}
              </Link>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12 flex items-center">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full"
              >
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">{t.sentTitle}</h3>
                <p className="text-secondary font-light text-sm">
                  {t.sentDesc}
                </p>
              </motion.div>
            ) : (
              <form
                id="contact-form"
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <h3 className="text-2xl font-bold text-primary mb-1">{t.formTitle}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-bold">{t.name}</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t.namePlaceholder}
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-bold">{t.org}</label>
                    <input
                      type="text"
                      name="company"
                      placeholder={t.orgPlaceholder}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-secondary font-bold">{t.email}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-secondary font-bold">{t.message}</label>
                  <textarea
                    name="message"
                    placeholder={t.messagePlaceholder}
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-on-primary py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.sending : t.send}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
