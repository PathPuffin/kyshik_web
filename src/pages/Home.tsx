import { motion } from "motion/react";
import { Heart, Users, Home as HomeIcon } from "lucide-react";

import posterArt from "../../stop_killing_dogs.webp";
import dogSwag from "../../dog_swag.webp";
import confusedDoggy from "../../confused_doggy.webp";
import dogScreaming from "../../dog_screaming.webp";
import adoptDontKill from "../../adopt_dont_kill.webp";
import dogSad from "../../dog_sad.webp";
import pawsDog from "../../paws_dog.png";
import doggiesPoster from "../../doggies.PNG";

const TELEGRAM_URL = "https://t.me/kyshikbot";

const TgIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.25-2.04 9.61c-.15.66-.54.82-1.08.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.21-.05-.33-.37-.12L7.26 14.34l-2.94-.92c-.64-.2-.65-.64.14-.95l11.48-4.43c.53-.19 1 .13.62.21z" />
  </svg>
);

const DOG_OVERLAYS = [
  {
    src: dogSad,
    className: "left-[16%] sm:left-[20%] top-[10%] sm:top-[11%] w-[98px] sm:w-[126px] md:w-[208px] -translate-x-[5px] -translate-y-[5px] sm:translate-x-0 sm:translate-y-0",
    float: { y: [0, -4, 0] },
    duration: 3.2,
    delay: 0.4,
  },
  {
    src: dogSwag,
    className: "left-[9%] sm:left-[11%] top-[29%] w-[108px] sm:w-[147px] md:w-[248px] -translate-x-[5px] sm:translate-x-0",
    float: { rotate: [-2, 2, -2], y: [0, -4, 0] },
    duration: 3.4,
    delay: 0.55,
  },
  {
    src: pawsDog,
    className: "left-[45%] sm:left-[44%] bottom-[18%] sm:bottom-[24%] w-[150px] sm:w-[160px] md:w-[180px]",
    float: { y: [0, -3, 0], rotate: [-2, 2, -2] },
    duration: 2.8,
    delay: 0.85,
  },
  {
    src: pawsDog,
    className: "left-[43%] sm:left-[42%] top-[14%] sm:top-[12%] w-[132px] sm:w-[142px] md:w-[160px]",
    float: { y: [0, -3, 0], rotate: [2, -2, 2] },
    duration: 2.7,
    delay: 0.65,
  },
  {
    src: confusedDoggy,
    className: "right-[10%] sm:right-[14%] top-[15%] sm:top-[17%] w-[116px] sm:w-[156px] md:w-[268px] translate-x-[5px] -translate-y-[5px] sm:translate-x-0 sm:translate-y-0",
    float: { rotate: [180, 176, 184, 178, 180], y: [0, -3, 0] },
    duration: 3.1,
    delay: 0.7,
  },
  {
    src: adoptDontKill,
    className: "right-[6%] sm:right-[9%] top-[39%] sm:top-[37%] w-[156px] sm:w-[204px] md:w-[340px] translate-x-[5px] sm:translate-x-0",
    float: { y: [0, -5, 0] },
    duration: 3.6,
    delay: 0.9,
  },
  {
    src: dogScreaming,
    className: "left-[14%] sm:left-[17%] bottom-[13%] sm:bottom-[12%] w-[142px] sm:w-[183px] md:w-[304px] -translate-x-[5px] translate-y-[5px] sm:translate-x-0 sm:translate-y-0",
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

const Hero = () => (
  <section
    className="relative min-h-screen overflow-hidden flex items-center justify-center"
    style={{
      background:
        "radial-gradient(900px 560px at 14% 12%, #f7f6f2 0%, #ece9e3 54%, #d9d4cb 100%)",
    }}
  >
    <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_18%_16%,rgba(255,59,48,0.2)_0,rgba(255,59,48,0)_33%),radial-gradient(circle_at_84%_70%,rgba(0,167,232,0.2)_0,rgba(0,167,232,0)_34%),repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />

    <div className="relative z-10 w-full min-h-screen pt-24 pb-12 px-3 sm:px-4 md:px-6 flex flex-col items-center justify-center gap-8">
      <motion.div
        className="relative w-full max-w-[1200px] rounded-[20px] overflow-hidden border-4 border-black/80 shadow-[0_20px_65px_rgba(0,0,0,0.38)] rotate-[-0.35deg]"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="absolute left-[8%] top-0 z-20 w-20 h-6 bg-black/55 rounded-b-sm rotate-[-2deg]" />
        <div className="absolute right-[9%] top-0 z-20 w-20 h-6 bg-black/55 rounded-b-sm rotate-[2deg]" />

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

      <motion.a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-tg text-white px-9 py-4 rounded-full text-sm shadow-[0_8px_32px_rgba(34,158,217,0.38)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(34,158,217,0.5)" }}
        whileTap={{ scale: 0.97 }}
      >
        <TgIcon />
        Телеграм Ботқа Өту
      </motion.a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative py-32 bg-background overflow-hidden">
    <div className="pointer-events-none absolute -left-12 top-20 w-44 h-44 rounded-full bg-accent/18 blur-2xl" />
    <div className="pointer-events-none absolute -right-10 bottom-20 w-40 h-40 rounded-full bg-tg/20 blur-2xl" />
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary mb-4">
          Біздің мақсат
        </p>
        <h2 className="text-[2.6rem] md:text-[4.1rem] font-bold text-primary leading-[0.92]">
          Иттер мен адамдар арасындағы{" "}
          <span className="italic text-accent">көпір.</span>
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
              i === 0 ? "rotate-[-1deg]" : i === 2 ? "rotate-[1deg]" : ""
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
        <span className="italic text-accent">өмір сақта.</span>
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
          alt="Stop Shelter Killings poster"
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
      <CTA />
      <BottomPoster />
    </main>
  </div>
);
