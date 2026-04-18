import { motion } from "motion/react";
import {
  Camera,
  Database,
  Fingerprint,
  Heart,
  LockKeyhole,
  Users,
} from "lucide-react";

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
    Icon: Users,
    eyebrow: "Что мешает учету",
    title: "Проблема",
    paragraphs: [
      "Существующие методы идентификации не справляются с учетом бездомных животных.",
      "Высокая стоимость чипирования делает массовый учет недоступным.",
      "В итоге статистика расходится с реальностью, а общественность не получает объективную картину.",
    ],
  },
  {
    Icon: Heart,
    eyebrow: "Как работает Kyshik",
    title: "Наше решение",
    paragraphs: [
      "Kyshik — первая независимая ИИ-платформа для учета животных в Казахстане.",
      "Искусственный интеллект превращает каждое фото в достоверный цифровой факт.",
      "Публичный мониторинг показывает факт и динамику, но не раскрывает точную геопозицию животного.",
    ],
  },
];

const STEPS = [
  {
    Icon: Camera,
    title: "Сделать фото",
    desc: "Пользователь фиксирует животное без раскрытия опасных деталей для посторонних.",
  },
  {
    Icon: Fingerprint,
    title: "Распознать",
    desc: "ИИ помогает отличать животных и связывать новые снимки с уже найденными следами.",
  },
  {
    Icon: LockKeyhole,
    title: "Защитить место",
    desc: "Точные координаты скрываются, а публично остается безопасный сигнал о факте наблюдения.",
  },
  {
    Icon: Database,
    title: "Собрать картину",
    desc: "Общественность получает объективную статистику и динамику, а не только отчеты на бумаге.",
  },
];

const GALLERY = [
  {
    src: greenDogSad,
    alt: "Жасыл тондағы қайғылы ит",
    title: "Каждый снимок важен",
  },
  {
    src: dogSwag,
    alt: "Dog swag көшірме суреті",
    title: "Животное не теряется в системе",
  },
  {
    src: confusedDoggy,
    alt: "Аң-таң болған ит",
    title: "Данные остаются проверяемыми",
  },
];

const Hero = () => (
  <section
    className="relative min-h-svh overflow-hidden flex items-start sm:items-center justify-center"
    style={{
      background:
        "linear-gradient(160deg, #f7f8f5 0%, #e8ece8 58%, #d6dcd6 100%)",
    }}
  >
    <div className="pointer-events-none absolute inset-0 opacity-35 bg-[repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />

    <div className="relative z-10 w-full min-h-svh pt-12 sm:pt-24 pb-6 sm:pb-12 px-3 sm:px-4 md:px-6 flex flex-col items-center justify-start sm:justify-center gap-4 sm:gap-8">
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
        className="mt-1 sm:mt-0 flex items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
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

      <motion.div
        className="relative w-full max-w-5xl px-2 text-center"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.42 }}
      >
        <p className="relative inline-flex -rotate-2 rounded-lg border-2 border-black bg-accent px-5 py-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.26em] text-white shadow-[6px_6px_0_rgba(0,0,0,0.24)]">
          Первые в Казахстане
        </p>
        <h1 className="relative mx-auto mt-5 max-w-5xl text-[2.15rem] sm:text-[3rem] md:text-[4.35rem] font-extrabold leading-[0.95] text-primary">
          Независимая ИИ-платформа для учета бездомных животных
        </h1>
        <p className="relative mx-auto mt-5 max-w-2xl text-sm sm:text-base font-medium leading-7 text-secondary">
          Каждое фото помогает общественности видеть объективную статистику, при этом точная геопозиция животных остается защищенной.
        </p>
      </motion.div>

    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative overflow-hidden bg-surface py-20 sm:py-24">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
            ИИ-платформа для учета животных
          </p>
          <h2 className="max-w-3xl text-[2.35rem] md:text-[4rem] font-bold text-primary leading-[0.98]">
            Объективная статистика вместо исчезновения
          </h2>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-secondary">
            Kyshik фиксирует то, что обычно остается невидимым: факт наблюдения, историю животного и изменения во времени. Точная геопозиция не становится публичной.
          </p>
          <p className="mt-5 max-w-xl border-l-2 border-accent/60 pl-5 text-base sm:text-lg leading-8 text-secondary">
            Мы используем архитектуру Privacy by Design. В базе данных Kyshik нет точных адресов — они превращены в необратимые цифровые следы. Мы защищаем животных, не создавая рисков для их безопасности.
          </p>
        </div>

        <div className="space-y-5">
          {CARDS.map(({ Icon, eyebrow, title, paragraphs }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="rounded-lg border-2 border-black/70 bg-card p-6 sm:p-8 shadow-[0_8px_0_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex shrink-0 items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                  {eyebrow}
                </p>
              </div>
              <h3 className="text-[1.95rem] md:text-[2.25rem] font-bold text-primary mb-5 leading-tight">{title}</h3>
              <div className="space-y-4">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="border-l-2 border-accent/45 pl-4 text-[15px] sm:text-base leading-7 text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how" className="bg-primary py-20 sm:py-24 text-white">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
          Механика доверия
        </p>
        <h2 className="text-[2.25rem] md:text-[3.75rem] font-bold text-white leading-[0.98]">
          От случайного кадра к объективной статистике
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {STEPS.map(({ Icon, title, desc }, index) => (
          <motion.article
            key={title}
            className="relative rounded-lg border-2 border-white/20 bg-white/7 p-6 shadow-[0_8px_0_rgba(255,255,255,0.08)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div className="w-11 h-11 rounded-full bg-tg/18 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-extrabold text-accent">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-extrabold text-white leading-tight">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-white/68">{desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="proof" className="relative py-20 sm:py-24 bg-surface overflow-hidden">
    <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
      <motion.div
        className="mb-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-end"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
            Цифровой след
          </p>
          <h2 className="text-[2.25rem] md:text-[3.75rem] font-bold text-primary leading-[0.98]">
            Фото, которое нельзя просто забыть
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-secondary lg:ml-auto">
          Снимки превращаются в защищенную историю наблюдений. Чем больше людей участвует, тем объективнее становится статистика для общественности, без публикации точных координат животных.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GALLERY.map((item, index) => (
          <motion.figure
            key={item.alt}
            className="group relative overflow-hidden rounded-lg border-2 border-black/70 bg-white shadow-[0_10px_0_rgba(0,0,0,0.18)]"
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
            <figcaption className="border-t-2 border-black/70 bg-white px-5 py-4">
              <p className="text-sm font-extrabold text-primary">{item.title}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative py-20 sm:py-24 overflow-hidden bg-primary">
    <motion.div
      className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center flex flex-col items-center gap-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
        Қазір қосыл
      </p>
      <h2 className="text-[2.45rem] md:text-[4.25rem] font-bold text-white leading-[0.96]">
        Помоги сделать животных видимыми
      </h2>
      <p className="max-w-2xl text-white/68 text-base sm:text-lg leading-8">
        Открой Telegram-бот, зафиксируй животное и добавь еще один честный факт в общую картину.
      </p>
      <motion.a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-tg text-white px-10 py-4 rounded-full text-sm font-bold shadow-[0_8px_40px_rgba(34,158,217,0.35)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <TgIcon />
        Открыть Telegram
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
      <HowItWorks />
      <Gallery />
      <CTA />
      <BottomPoster />
    </main>
  </div>
);
