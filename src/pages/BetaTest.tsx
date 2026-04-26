import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ClipboardList, Mail, PawPrint, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const RECIPIENT = "salem@kyshik.com";
const CONTACT_FORM_URL = "/contact#contact-form";
const WEB3FORMS_ACCESS_KEY = "f117ad90-c89c-4844-b9ce-3dae5a63b2de";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  occupancy: string;
  animalExperience: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  occupancy: "",
  animalExperience: "",
};

export const BetaTest = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = useMemo(
    () =>
      language === "en"
        ? {
            tag: "Beta application",
            title: "Become a Kyshik beta tester",
            desc: "Tell us who you are and how you can help test animal sightings, passports, and field workflows.",
            panelTitle: "What we look for",
            panelItems: [
              "People who can test the app in real neighborhoods",
              "Clear photo submissions and thoughtful notes",
              "Respectful experience around animals or willingness to learn",
            ],
            fullName: "Full name *",
            email: "Email *",
            phone: "Phone *",
            address: "Address *",
            occupancy: "Occupancy *",
            animalExperience: "Experience with animals *",
            fullNamePlaceholder: "Your full name",
            emailPlaceholder: "you@example.com",
            phonePlaceholder: "+1 555 000 0000",
            addressPlaceholder: "City, neighborhood, street",
            occupancyPlaceholder: "Student, full-time, part-time, volunteer...",
            animalExperiencePlaceholder: "Tell us if you have rescued, fostered, volunteered, owned pets, worked with clinics, or have no experience yet.",
            submit: "Submit application",
            sending: "Sending...",
            sentTitle: "Application sent",
            sentDesc: "Thank you. Your application was sent to salem@kyshik.com.",
            alert: "Could not send your application right now. Please try again.",
          }
        : {
            tag: "Заявка в бета-тест",
            title: "Станьте бета-тестером Kyshik",
            desc: "Расскажите о себе и о том, как вы можете помочь тестировать наблюдения, паспорта животных и полевые сценарии.",
            panelTitle: "Кого мы ищем",
            panelItems: [
              "Людей, которые могут тестировать приложение в реальных районах",
              "Тех, кто сможет делать понятные фото и оставлять аккуратные заметки",
              "Людей с опытом общения с животными или готовностью учиться",
            ],
            fullName: "Полное имя *",
            email: "Email *",
            phone: "Телефон *",
            address: "Адрес *",
            occupancy: "Занятость *",
            animalExperience: "Опыт работы с животными *",
            fullNamePlaceholder: "Ваше полное имя",
            emailPlaceholder: "you@example.com",
            phonePlaceholder: "+7 700 000 0000",
            addressPlaceholder: "Город, район, улица",
            occupancyPlaceholder: "Студент, full-time, part-time, волонтер...",
            animalExperiencePlaceholder: "Расскажите, спасали ли вы животных, были ли волонтером, держали ли питомцев, работали ли с клиниками, или опыта пока нет.",
            submit: "Отправить заявку",
            sending: "Отправляем...",
            sentTitle: "Заявка отправлена",
            sentDesc: "Спасибо. Ваша заявка отправлена на salem@kyshik.com.",
            alert: "Не удалось отправить заявку. Попробуйте еще раз.",
          },
    [language],
  );

  const inputClass =
    "w-full rounded-lg border-2 border-black/25 bg-white px-4 py-3 text-sm text-primary placeholder:text-secondary/50 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20";

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData(event.currentTarget);
      payload.append("subject", `Kyshik beta application - ${form.fullName}`);
      payload.append(
        "message",
        [
          `Phone: ${form.phone}`,
          `Address: ${form.address}`,
          `Occupancy: ${form.occupancy}`,
          "",
          "Experience with animals:",
          form.animalExperience,
        ].join("\n"),
      );
      payload.append("from_name", "Kyshik Beta Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit form.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch {
      window.alert(t.alert);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[#f8f8f5] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-18 bg-[repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-accent">{t.tag}</p>
          <h1 className="text-[2.55rem] font-bold leading-[0.98] text-primary md:text-[4.5rem]">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-secondary sm:text-lg">{t.desc}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 overflow-hidden rounded-lg border-2 border-black/70 bg-white shadow-[0_10px_0_rgba(0,0,0,0.2)] lg:grid-cols-[0.82fr_1.18fr]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <aside className="flex flex-col justify-between gap-10 bg-primary p-8 text-white sm:p-10 lg:p-14">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
                <PawPrint className="h-7 w-7" />
              </div>
              <h2 className="text-[2rem] font-bold leading-[0.98] md:text-[3rem]">{t.panelTitle}</h2>
            </div>
            <div className="space-y-4">
              {t.panelItems.map((item, index) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-white/76">
                  {index === 0 ? (
                    <ClipboardList className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  ) : (
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  )}
                  <span>{item}</span>
                </p>
              ))}
              <Link to={CONTACT_FORM_URL} className="inline-flex items-center gap-2 text-sm font-bold text-white/78 hover:text-white">
                <Mail className="h-4 w-4 text-accent" />
                {RECIPIENT}
              </Link>
            </div>
          </aside>

          <div className="p-6 sm:p-8 lg:p-12">
            {submitted ? (
              <motion.div
                className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="mb-4 h-12 w-12 text-accent" />
                <h3 className="mb-2 text-2xl font-bold text-primary">{t.sentTitle}</h3>
                <p className="max-w-md text-sm leading-6 text-secondary">{t.sentDesc}</p>
              </motion.div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                    {t.fullName}
                    <input
                      required
                      name="name"
                      value={form.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      placeholder={t.fullNamePlaceholder}
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                    {t.email}
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder={t.emailPlaceholder}
                      className={inputClass}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                    {t.phone}
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder={t.phonePlaceholder}
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                    {t.occupancy}
                    <input
                      required
                      name="occupancy"
                      value={form.occupancy}
                      onChange={(event) => updateField("occupancy", event.target.value)}
                      placeholder={t.occupancyPlaceholder}
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                  {t.address}
                  <input
                    required
                    name="address"
                    value={form.address}
                    onChange={(event) => updateField("address", event.target.value)}
                    placeholder={t.addressPlaceholder}
                    className={inputClass}
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                  {t.animalExperience}
                  <textarea
                    required
                    name="animal_experience"
                    rows={6}
                    value={form.animalExperience}
                    onChange={(event) => updateField("animalExperience", event.target.value)}
                    placeholder={t.animalExperiencePlaceholder}
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-all duration-300 hover:bg-accent"
                >
                  {isSubmitting ? t.sending : t.submit}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
