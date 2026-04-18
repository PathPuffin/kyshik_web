import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Heart, Users, Home as HomeIcon } from "lucide-react";

import posterArt from "../../stop_killing_dogs.webp";
import dogSwag from "../../dog_swag.webp";
import confusedDoggy from "../../confused_doggy.webp";
import dogScreaming from "../../dog_screaming.webp";
import adoptDontKill from "../../adopt_dont_kill.webp";
import dogSad from "../../dog_sad.webp";
import doggiesPoster from "../../doggies.webp";
import greenDogSad from "../../green_dog_sad.webp";
import pawsPoster from "../../paws.webp";

const TELEGRAM_URL = "https://t.me/kyshikbot";
const VOLUNTEER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqx_xST3RUvYqF-gfLgvMcVR2SqPcQ9Vmb_KbziWUIwMLisw/viewform?usp=dialog";
const WEB3FORMS_ACCESS_KEY = "f117ad90-c89c-4844-b9ce-3dae5a63b2de";

const TgIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.25-2.04 9.61c-.15.66-.54.82-1.08.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.21-.05-.33-.37-.12L7.26 14.34l-2.94-.92c-.64-.2-.65-.64.14-.95l11.48-4.43c.53-.19 1 .13.62.21z" />
  </svg>
);

const DOG_OVERLAYS = [
  {
    src: dogSad,
    className: "left-[14%] sm:left-[15%] top-[4%] sm:top-[11%] w-[102px] sm:w-[164px] md:w-[270px] -translate-x-[2px] -translate-y-[5px] sm:translate-x-0 sm:translate-y-0",
    float: { y: [0, -4, 0] },
    duration: 3.2,
    delay: 0.4,
  },
  {
    src: dogSwag,
    className: "left-[3%] sm:left-[-1%] top-[24%] w-[82px] sm:w-[191px] md:w-[322px] -translate-x-[6px] translate-y-[15px] sm:translate-x-0",
    float: { rotate: [-2, 2, -2], y: [0, -4, 0] },
    duration: 3.4,
    delay: 0.55,
  },
  {
    src: pawsPoster,
    className: "hidden sm:block left-1/2 top-[14%] w-[128px] sm:w-[200px] md:w-[286px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg]",
    float: { y: [0, -3, 0], rotate: [6, 9, 5] },
    duration: 3,
    delay: 0.75,
  },
  {
    src: pawsPoster,
    className: "hidden sm:block left-[58%] bottom-[14%] w-[92px] sm:w-[146px] md:w-[203px] -translate-x-1/2 translate-y-1/2 -rotate-[7deg]",
    float: { y: [0, -2, 0], rotate: [-9, -6, -10] },
    duration: 3.1,
    delay: 0.82,
  },
  {
    src: pawsPoster,
    className: "sm:hidden left-1/2 top-[18%] w-[125px] -translate-x-1/2 -translate-y-1/2 rotate-[11deg]",
    float: { y: [0, -3, 0], rotate: [8, 12, 7] },
    duration: 3,
    delay: 0.62,
  },
  {
    src: pawsPoster,
    className: "sm:hidden left-1/2 bottom-[18%] w-[125px] -translate-x-1/2 translate-y-1/2 -rotate-[9deg]",
    float: { y: [0, -3, 0], rotate: [-12, -8, -11] },
    duration: 3,
    delay: 0.88,
  },
  {
    src: confusedDoggy,
    className: "right-[13%] sm:right-[14%] top-[6%] sm:top-[7%] w-[109px] sm:w-[203px] md:w-[348px] -translate-y-[5px] sm:translate-y-0",
    float: { rotate: [180, 176, 184, 178, 180], y: [0, -3, 0] },
    duration: 3.1,
    delay: 0.7,
  },
  {
    src: adoptDontKill,
    className: "right-[11%] sm:right-[12%] top-[61%] sm:top-[58%] w-[107px] sm:w-[186px] md:w-[309px]",
    float: { y: [0, -5, 0] },
    duration: 3.6,
    delay: 0.9,
  },
  {
    src: dogScreaming,
    className: "left-[14%] sm:left-[13%] bottom-[6%] sm:bottom-[12%] w-[133px] sm:w-[238px] md:w-[395px] -translate-x-[2px] translate-y-[5px] sm:translate-x-0 sm:translate-y-0",
    float: { rotate: [-1.3, 1.3, -1.3], y: [0, -3, 0] },
    duration: 2.9,
    delay: 1.05,
  },
];

const CARDS = [
  {
    Icon: HomeIcon,
    title: "Жануарлар баспанасы табу",
    desc: "Иесіз иттерге жылы баспана мен дұрыс күтім табуға көмектесеміз.",
  },
  {
    Icon: Heart,
    title: "Асырап алу",
    desc: "Дүкеннен сатып алма — панажайдан асырап ал. Бір өмірін құтқарасың.",
  },
  {
    Icon: Users,
    title: "Қауымдастық",
    desc: "Жануарларды жақсы көретін адамдарды біріктіреміз. Бірге күштіміз.",
  },
];

const GALLERY = [
  {
    src: greenDogSad,
    alt: "Жасыл тондағы қайғылы ит",
  },
  {
    src: dogSwag,
    alt: "Dog swag көшірме суреті",
  },
  {
    src: confusedDoggy,
    alt: "Аң-таң болған ит",
  },
];

const Hero = () => (
  <section
    className="relative min-h-svh overflow-hidden flex items-start sm:items-center justify-center"
    style={{
      background:
        "radial-gradient(900px 560px at 14% 12%, #f7f6f2 0%, #ece9e3 54%, #d9d4cb 100%)",
    }}
  >
    <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_18%_16%,rgba(255,59,48,0.2)_0,rgba(255,59,48,0)_33%),radial-gradient(circle_at_84%_70%,rgba(0,167,232,0.2)_0,rgba(0,167,232,0)_34%),repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />

    <div className="relative z-10 w-full min-h-svh pt-12 sm:pt-24 pb-6 sm:pb-12 px-3 sm:px-4 md:px-6 flex flex-col items-center justify-start sm:justify-center gap-4 sm:gap-8">
      <motion.div
        className="w-full max-w-300 rounded-2xl border-2 border-black/70 bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-3.5 sm:py-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[12.5px] sm:text-sm leading-snug sm:leading-relaxed text-black/85">
          <span className="font-bold text-black">Проблема:</span> Существующие методы идентификации не справляются с учетом бездомных животных, поэтому официальные данные часто расходятся с реальностью. Это не позволяет эффективно распределять ресурсы и принимать верные решения.
        </p>
        <p className="mt-2.5 sm:mt-3 text-[12.5px] sm:text-sm leading-snug sm:leading-relaxed text-black/85">
          <span className="font-bold text-black">Наше решение:</span> Kyshik — первая независимая база данных бездомных животных в Казахстане. Мы фиксируем реальную ситуацию, превращая каждое фото в достоверный факт: наша цель — обеспечить прозрачность данных и дать обществу объективную картину для поиска решений.
        </p>
      </motion.div>
      <motion.div
        className="relative w-full max-w-300 rounded-[20px] overflow-hidden border-4 border-black/80 shadow-[0_20px_65px_rgba(0,0,0,0.38)] rotate-[-0.35deg]"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="absolute left-[8%] top-0 z-20 w-20 h-6 bg-black/55 rounded-b-sm -rotate-2" />
        <div className="absolute right-[9%] top-0 z-20 w-20 h-6 bg-black/55 rounded-b-sm rotate-2" />

        <img
          src={posterArt}
          alt="Тірі жанды қорғау постері"
          className="block w-full h-auto"
          loading="eager"
        />

        <div className="pointer-events-none absolute inset-0 z-10">
          {DOG_OVERLAYS.map((dog, idx) => (
            <motion.img
              key={idx}
              src={dog.src}
              alt=""
              loading="eager"
              className={`absolute ${dog.className} drop-shadow-[0_10px_20px_rgba(14,7,4,0.3)]`}
              initial={{ opacity: 1 }}
              animate={dog.float}
              transition={{ duration: dog.duration, delay: dog.delay + 0.08 * idx, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-1 sm:mt-0 flex flex-col sm:flex-row items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          href={VOLUNTEER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 bg-accent text-white px-9 py-4 rounded-full text-sm shadow-[0_8px_32px_rgba(255,59,48,0.34)]"
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(255,59,48,0.46)" }}
          whileTap={{ scale: 0.97 }}
        >
          Volunteering
        </motion.a>

        <motion.a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-tg text-white px-9 py-4 rounded-full text-sm shadow-[0_8px_32px_rgba(34,158,217,0.38)]"
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(34,158,217,0.5)" }}
          whileTap={{ scale: 0.97 }}
        >
          <TgIcon />
          Телеграм Ботқа Өту
        </motion.a>
      </motion.div>

    </div>
  </section>
);

const About = () => (
  <section className="relative py-24 bg-[linear-gradient(180deg,#f6f1e8_0%,#ede6db_100%)] overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_12%_10%,rgba(255,59,48,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(0,167,232,0.16),transparent_30%),radial-gradient(circle_at_52%_82%,rgba(17,17,17,0.1),transparent_36%)]" />
    <div className="relative max-w-6xl mx-auto px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary mb-4">
          Біздің мақсат
        </p>
        <h2 className="text-[2.6rem] md:text-[4.1rem] font-bold text-primary leading-[0.92]">
          Иттер мен адамдар арасындағы{" "}
          <span className="italic text-accent">көпір</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CARDS.map(({ Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className={`bg-card rounded-2xl p-8 border-2 border-black/70 hover:border-accent transition-all duration-300 shadow-[0_10px_0_rgba(0,0,0,0.25)] ${
              i === 0 ? "-rotate-1" : i === 2 ? "rotate-1" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-[1.85rem] font-bold text-primary mb-3">{title}</h3>
            <p className="text-secondary text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="relative py-24 bg-[linear-gradient(180deg,#f6f1e8_0%,#ede6db_100%)] overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_12%_10%,rgba(255,59,48,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(0,167,232,0.16),transparent_30%),radial-gradient(circle_at_52%_82%,rgba(17,17,17,0.1),transparent_36%)]" />
    <div className="relative max-w-6xl mx-auto px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[2.4rem] md:text-[3.8rem] font-bold text-primary leading-[0.95]">
          Сен берген <span className="italic text-accent">суреттер</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GALLERY.map((item, index) => (
          <motion.figure
            key={item.alt}
            className={`group relative overflow-hidden rounded-3xl border-2 border-black/70 bg-white shadow-[0_16px_0_rgba(0,0,0,0.18)] ${
              index % 3 === 1 ? "-rotate-1" : index % 3 === 2 ? "rotate-1" : ""
            }`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="block w-full h-67.5 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const inputClass =
    "w-full rounded-lg border border-black/25 bg-white/95 px-4 py-3 text-sm text-primary placeholder:text-secondary/60 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/25";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("message", form.message);
      payload.append("company", form.company);
      payload.append("subject", `New contact from ${form.name}`);

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
      window.alert("Could not send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-[linear-gradient(180deg,#f6f1e8_0%,#ede6db_100%)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_12%_10%,rgba(255,59,48,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(0,167,232,0.16),transparent_30%),radial-gradient(circle_at_52%_82%,rgba(17,17,17,0.1),transparent_36%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border-2 border-black/70 shadow-[0_16px_0_rgba(0,0,0,0.22)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[linear-gradient(160deg,#171717_0%,#0f0f0f_64%,#050505_100%)] p-12 lg:p-20 text-white flex flex-col justify-between gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60 mb-4">
                Байланыс
              </p>
              <h2 className="text-[2.1rem] md:text-[3rem] font-bold leading-[0.95]">
                Жобаң туралы
                <span className="italic text-accent"> бізге жаз</span>
              </h2>
              <p className="text-white/65 text-sm leading-relaxed mt-5 max-w-md">
                Толық ақпаратты қалдыр. Командамыз қысқа уақытта жауап береді.
              </p>
            </div>

            <div className="space-y-3 text-sm text-white/80">
              <p>Email: salem@kyshik.com</p>
              <p>Telegram: @kyshikbot</p>
            </div>
          </div>

          <div className="bg-surface-container-low p-12 lg:p-20 flex items-center">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full"
              >
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4 opacity-60" />
                <h3 className="font-serif text-2xl text-primary mb-2">Message sent successfully</h3>
                <p className="text-secondary font-light text-sm">
                  Thanks for contacting us. We&apos;ll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                <h3 className="font-serif text-2xl text-primary mb-2">How can we help?</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-medium">Name *</label>
                    <input
                      type="text"
                      placeholder="niyaz kazken"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-medium">Company</label>
                    <input
                      type="text"
                      placeholder="kyshik"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-secondary font-medium">Email *</label>
                  <input
                    type="email"
                    placeholder="salem@kyshik.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-secondary font-medium">Message *</label>
                  <textarea
                    placeholder=""
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
                  className="bg-primary text-on-primary py-4 rounded-lg font-medium text-sm uppercase tracking-widest hover:bg-primary/80 transition-all duration-300 flex items-center justify-center gap-2 group mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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

const CTA = () => (
  <section className="relative py-28 overflow-hidden bg-[linear-gradient(160deg,#171717_0%,#0f0f0f_64%,#050505_100%)]">
    <div className="pointer-events-none absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_15%_20%,rgba(255,59,48,0.22),transparent_38%),radial-gradient(circle_at_85%_76%,rgba(0,167,232,0.24),transparent_36%)]" />
    <motion.div
      className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-[2.7rem] md:text-[4.4rem] font-bold text-white leading-[0.92]">
        Қазір қосыл —{" "}
        <span className="italic text-accent">өмір сақта</span>
      </h2>
      <p className="text-white/60 text-base font-light leading-relaxed">
        Telegram ботымыз арқылы иесіз иттерді тап, асырап ал немесе жәрдемде.
      </p>
      <motion.a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-tg text-white px-10 py-4 rounded-full text-sm shadow-[0_8px_40px_rgba(34,158,217,0.35)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <TgIcon />
        Телеграмда Ашу
      </motion.a>
    </motion.div>
  </section>
);

const BottomPoster = () => (
  <section className="py-14 bg-[linear-gradient(180deg,#111_0%,#0b0b0b_100%)]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div
        className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={doggiesPoster}
          alt="Doggies poster"
          className="block w-full h-auto"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export const Home = () => (
  <div className="min-h-screen">
    <main>
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <CTA />
      <BottomPoster />
    </main>
  </div>
);
