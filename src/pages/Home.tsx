import { motion } from "motion/react";
import { Camera, Database, Fingerprint, LockKeyhole, Mail, Sparkles } from "lucide-react";

import posterArt from "../../stop_killing_dogs.webp";
import dogSwag from "../../dog_swag.webp";
import confusedDoggy from "../../confused_doggy.webp";
import dogScreaming from "../../dog_screaming.webp";
import adoptDontKill from "../../adopt_dont_kill.webp";
import dogSad from "../../dog_sad.webp";
import doggiesPoster from "../../doggies.webp";
import greenDogSad from "../../green_dog_sad.webp";
import pawsPoster from "../../paws.webp";
import { useLanguage } from "../context/LanguageContext";

const BETA_URL = "https://tally.so/r/rjrG2p";
const CONTACT_URL = "/contact";

type Language = "ru" | "en";

const HOME_TEXT: Record<
  Language,
  {
    heroTag: string;
    heroTitle: string;
    heroDesc: string;
    problemTag: string;
    title: string;
    problem: string;
    solution: string;
    solutionTag: string;
    whyTitle: string;
    whyItems: { title: string; desc: string }[];
    closing: string;
  }
> = {
  ru: {
    heroTag: "See to be seen",
    heroTitle: "Kyshik",
    heroDesc:
      "Нельзя игнорировать того, кого ты уже увидел.",
    problemTag: "Признание",
    title: "Kyshik технология признания.",
    problem:
      "Мы превращаем животных в личности.",
    solution: "",
    solutionTag: "Признание",
    whyTitle: "Жизнь, которую больше нельзя отрицать.",
    whyItems: [
      {
        title: "Публичность",
        desc: "Фото через ИИ создает цифровой паспорт. У животного появляется уникальный ID и своя история.",
      },
      {
        title: "Прозрачность",
        desc: "Твое фото превращает существование животного в неоспоримый факт.",
      },
      {
        title: "Безопасность",
        desc: "Мы не наводчики. Система бережно скрывает точные координаты, оставляя только район.",
      },
    ],
    closing:
      "Нельзя игнорировать того, кого ты уже увидел.",
  },
  en: {
    heroTag: "See to be seen",
    heroTitle: "Kyshik",
    heroDesc:
      "You cannot ignore someone you have already seen.",
    problemTag: "Recognition",
    title: "Kyshik is recognition technology.",
    problem:
      "We turn animals into individuals.",
    solution: "",
    solutionTag: "Recognition",
    whyTitle: "A life that can no longer be denied.",
    whyItems: [
      {
        title: "Public Visibility",
        desc: "A photo processed by AI creates a digital passport. The animal gets a unique ID and its own story.",
      },
      {
        title: "Transparency",
        desc: "Your photo turns the animal's existence into an undeniable fact.",
      },
      {
        title: "Safety",
        desc: "We are not spotters. The system carefully hides exact coordinates and leaves only the district visible.",
      },
    ],
    closing:
      "You cannot ignore someone you have already seen.",
  },
};

const HOW_TEXT = {
  ru: {
    tag: "Как работает доверие",
    title: "Мы отказываемся от закрытых отчетов в пользу открытых данных.",
    desc: "Kyshik превращает случайный кадр в объективное доказательство жизни.",
    steps: [
      {
        Icon: Camera,
        title: "Снять.",
        desc: "Один кадр и животное попадает в поле зрения общества. Без геотегов, без лишнего шума. Только сам факт присутствия.",
      },
      {
        Icon: Fingerprint,
        title: "Распознать.",
        desc: "ИИ связывает снимки в уникальную историю. Разрозненные кадры становятся судьбой одного существа.",
      },
      {
        Icon: LockKeyhole,
        title: "Скрыть.",
        desc: "Безопасность важнее координат. Мы защищаем их от угроз, оставляя видимым только сам факт жизни.",
      },
      {
        Icon: Database,
        title: "Сформировать картину.",
        desc: "Общество получает доступ к честной статистике. Не сухой, не усредненной. Реальной. Громкой. Неоспоримой.",
      },
    ],
  },
  en: {
    tag: "How trust works",
    title: "We reject closed reports in favor of open data.",
    desc: "Kyshik turns a random frame into objective proof of life.",
    steps: [
      {
        Icon: Camera,
        title: "Capture.",
        desc: "One frame brings an animal into society's field of view. No geotags, no extra noise. Only the fact of presence.",
      },
      {
        Icon: Fingerprint,
        title: "Recognize.",
        desc: "AI connects photos into a unique story. Scattered frames become the fate of one living being.",
      },
      {
        Icon: LockKeyhole,
        title: "Hide.",
        desc: "Safety matters more than coordinates. We protect them from threats while keeping the fact of life visible.",
      },
      {
        Icon: Database,
        title: "Build the picture.",
        desc: "Society gets access to honest statistics. Not dry, not averaged. Real. Loud. Undeniable.",
      },
    ],
  },
};

const GALLERY_TEXT = {
  ru: {
    tag: "Цифровой след",
    title: "Фото, которое нельзя забыть.",
    desc: "Каждый снимок это голос. Чем больше нас, тем отчетливее становится общая картина. Это не просто учет, это цифровая история, которую невозможно игнорировать.",
    items: [
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
    ],
  },
  en: {
    tag: "Digital footprint",
    title: "A photo that cannot be forgotten.",
    desc: "Every photo is a voice. The more of us there are, the clearer the bigger picture becomes. This is not just counting, it is a digital history that cannot be ignored.",
    items: [
      {
        src: greenDogSad,
        alt: "Sad dog in green tone",
        title: "Every photo matters",
      },
      {
        src: dogSwag,
        alt: "Stylized dog poster",
        title: "An animal is not lost in the system",
      },
      {
        src: confusedDoggy,
        alt: "Confused dog",
        title: "Data remains verifiable",
      },
    ],
  },
};

const CTA_TEXT = {
  ru: {
    tag: "Kyshik",
    title: "Нельзя игнорировать того, кого ты уже увидел.",
    desc: "Присоединись к beta и помоги добавить еще один честный факт в общую картину.",
    button: "Бета тестинг",
    contact: "Контакт",
  },
  en: {
    tag: "Kyshik",
    title: "You cannot ignore someone you have already seen.",
    desc: "Join the beta and help add one more honest fact to the bigger picture.",
    button: "Beta Testing",
    contact: "Contact",
  },
};

const SCALE_TEXT = {
  ru: {
    tag: "Масштаб проблемы",
    stats: [
      {
        value: "+200к",
        desc: "животных попадают в систему отлова ежегодно. Большинство — безвозвратно.",
      },
      {
        value: "95%",
        desc: "собак в некоторых городах не покидают пункты отлова живыми.",
      },
      {
        value: "0",
        desc: "единой базы данных бездомных животных. Ни одной фотографии. Ни одной судьбы.",
      },
    ],
  },
  en: {
    tag: "The Scale of the Problem",
    stats: [
      {
        value: "+200k",
        desc: "animals enter the capture system every year. Most disappear without a trace.",
      },
      {
        value: "95%",
        desc: "of dogs in some cities do not leave capture facilities alive.",
      },
      {
        value: "0",
        desc: "unified database of stray animals. Not one photo. Not one fate.",
      },
    ],
  },
};

const DOG_OVERLAYS = [
  {
    src: dogSad,
    className:
      "left-[14%] sm:left-[15%] top-[4%] sm:top-[11%] w-[102px] sm:w-[164px] md:w-[270px] -translate-x-[2px] -translate-y-[5px] sm:translate-x-0 sm:translate-y-0",
    float: { y: [0, -7, -3, -9, 0], rotate: [-1, 1.6, -0.8, 1.1, -1], scale: [1, 1.025, 1, 1.02, 1] },
    duration: 4.2,
    delay: 0.4,
    origin: "50% 82%",
  },
  {
    src: dogSwag,
    className:
      "left-[3%] sm:left-[-1%] top-[24%] w-[82px] sm:w-[191px] md:w-[322px] -translate-x-[6px] translate-y-[15px] sm:translate-x-0",
    float: { x: [0, 4, -3, 2, 0], y: [0, -5, -1, -6, 0], rotate: [-3, 3.5, -1.5, 2.5, -3] },
    duration: 3.6,
    delay: 0.55,
    origin: "32% 72%",
  },
  {
    src: pawsPoster,
    className:
      "hidden sm:block left-1/2 top-[14%] w-[128px] sm:w-[200px] md:w-[286px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg]",
    float: { y: [0, -4, 0, -2, 0], rotate: [6, 11, 7, 10, 6], opacity: [0.88, 1, 0.92, 1, 0.88] },
    duration: 2.8,
    delay: 0.75,
    origin: "50% 50%",
  },
  {
    src: pawsPoster,
    className:
      "hidden sm:block left-[58%] bottom-[14%] w-[92px] sm:w-[146px] md:w-[203px] -translate-x-1/2 translate-y-1/2 -rotate-[7deg]",
    float: { x: [0, -2, 2, -1, 0], y: [0, -5, -1, -3, 0], rotate: [-10, -5, -9, -6, -10], opacity: [0.84, 1, 0.9, 1, 0.84] },
    duration: 3.3,
    delay: 0.82,
    origin: "50% 50%",
  },
  {
    src: pawsPoster,
    className:
      "sm:hidden left-1/2 top-[18%] w-[125px] -translate-x-1/2 -translate-y-1/2 rotate-[11deg]",
    float: { y: [0, -4, -1, -3, 0], rotate: [8, 14, 9, 12, 8], opacity: [0.86, 1, 0.9, 1, 0.86] },
    duration: 2.9,
    delay: 0.62,
    origin: "50% 50%",
  },
  {
    src: pawsPoster,
    className:
      "sm:hidden left-1/2 bottom-[18%] w-[125px] -translate-x-1/2 translate-y-1/2 -rotate-[9deg]",
    float: { x: [0, 2, -2, 1, 0], y: [0, -5, -1, -3, 0], rotate: [-12, -7, -11, -8, -12], opacity: [0.84, 1, 0.88, 1, 0.84] },
    duration: 3.2,
    delay: 0.88,
    origin: "50% 50%",
  },
  {
    src: confusedDoggy,
    className:
      "right-[13%] sm:right-[14%] top-[6%] sm:top-[7%] w-[109px] sm:w-[203px] md:w-[348px] -translate-y-[5px] sm:translate-y-0",
    float: { x: [0, -3, 4, -2, 0], y: [0, -8, -2, -6, 0], rotate: [180, 171, 187, 176, 180], scale: [1, 1.015, 0.995, 1.02, 1] },
    duration: 3.9,
    delay: 0.7,
    origin: "50% 18%",
  },
  {
    src: adoptDontKill,
    className:
      "right-[11%] sm:right-[12%] top-[61%] sm:top-[58%] w-[107px] sm:w-[186px] md:w-[309px]",
    float: { x: [0, 2, -2, 3, 0], y: [0, -8, -3, -10, 0], rotate: [-1, 1.5, -1.2, 1, -1], scale: [1, 1.03, 1.01, 1.035, 1] },
    duration: 4.4,
    delay: 0.9,
    origin: "50% 78%",
  },
  {
    src: dogScreaming,
    className:
      "left-[14%] sm:left-[13%] bottom-[6%] sm:bottom-[12%] w-[133px] sm:w-[238px] md:w-[395px] -translate-x-[2px] translate-y-[5px] sm:translate-x-0 sm:translate-y-0",
    float: { x: [0, -2, 3, -3, 2, 0], y: [0, -4, -1, -5, -2, 0], rotate: [-2, 2.4, -1.5, 2, -2.2, -2], scale: [1, 1.02, 1, 1.018, 1.005, 1] },
    duration: 2.5,
    delay: 1.05,
    origin: "42% 72%",
  },
];

const HeroPoster = () => (
  <motion.div
    className="relative w-full max-w-[21rem] sm:max-w-300 rounded-[20px] overflow-hidden border-4 border-black/80 shadow-[0_20px_65px_rgba(0,0,0,0.38)] rotate-[-0.35deg]"
    initial={{ opacity: 0, y: 16, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
  >
    <div className="absolute left-[8%] top-0 z-20 w-20 h-6 bg-black/55 rounded-b-sm -rotate-2" />
    <div className="absolute right-[9%] top-0 z-20 w-20 h-6 bg-black/55 rounded-b-sm rotate-2" />

    <img src={posterArt} alt="" className="block w-full h-auto" loading="eager" />

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
          style={{ transformOrigin: dog.origin }}
          transition={{
            duration: dog.duration,
            delay: dog.delay + 0.08 * idx,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  </motion.div>
);

const HomeContent = () => {
  const { language } = useLanguage();
  const t = HOME_TEXT[language];

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
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
              {t.problemTag}
            </p>
            <h1 className="max-w-3xl text-[2.35rem] md:text-[4rem] font-bold text-primary leading-[0.98]">
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-secondary">
              {t.problem}
            </p>
            {t.solution && (
              <p className="mt-5 max-w-xl border-l-2 border-accent/60 pl-5 text-base sm:text-lg leading-8 text-secondary">
                {t.solution}
              </p>
            )}
          </div>

        <div className="space-y-5">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border-2 border-black/70 bg-card p-6 sm:p-8 shadow-[0_8px_0_rgba(0,0,0,0.2)]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
              {t.solutionTag}
            </p>
            <h2 className="mt-4 text-[1.95rem] md:text-[2.25rem] font-bold text-primary leading-tight">
              {t.whyTitle}
            </h2>
          </motion.article>

          {t.whyItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="rounded-lg border-2 border-black/70 bg-card p-6 sm:p-8 shadow-[0_8px_0_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-[1.65rem] md:text-[2rem] font-bold text-primary mb-5 leading-tight">
                {item.title}
              </h3>
              <p className="border-l-2 border-accent/45 pl-4 text-[15px] sm:text-base leading-7 text-secondary">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

const HeroActions = () => {
  const { language } = useLanguage();
  const labels =
    language === "en"
      ? { beta: "Beta Testing", contact: "Contact" }
      : { beta: "Бета тестинг", contact: "Контакт" };

  return (
    <motion.div
      className="flex flex-row flex-wrap items-center justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.a
        href={BETA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-accent text-white px-6 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-[0_8px_32px_rgba(255,59,48,0.36)]"
        whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(255,59,48,0.46)" }}
        whileTap={{ scale: 0.97 }}
      >
        <Sparkles size={16} />
        {labels.beta}
      </motion.a>
      <motion.a
        href={CONTACT_URL}
        className="flex items-center gap-2.5 border-2 border-black/80 bg-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-primary shadow-[0_8px_22px_rgba(0,0,0,0.16)]"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <Mail size={16} />
        {labels.contact}
      </motion.a>
    </motion.div>
  );
};

const ScaleOfSilence = () => {
  const { language } = useLanguage();
  const t = SCALE_TEXT[language];

  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-16 bg-[repeating-linear-gradient(-18deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
            {t.tag}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.stats.map((stat, index) => (
            <motion.article
              key={stat.value}
              className="rounded-lg border-2 border-white/18 bg-white/7 p-6 text-center sm:p-7 shadow-[0_8px_0_rgba(255,255,255,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <p className="text-[2.65rem] sm:text-[3.5rem] font-extrabold leading-none text-accent">
                {stat.value}
              </p>
              <p className="mt-5 text-base leading-7 text-white/72">
                {stat.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = HOW_TEXT[language];

  return (
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
            {t.tag}
          </p>
          <h2 className="text-[2.25rem] md:text-[3.75rem] font-bold text-white leading-[0.98]">
            {t.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-white/68">
            {t.desc}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {t.steps.map(({ Icon, title, desc }, index) => (
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
};

const Gallery = () => {
  const { language } = useLanguage();
  const t = GALLERY_TEXT[language];

  return (
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
              {t.tag}
            </p>
            <h2 className="text-[2.25rem] md:text-[3.75rem] font-bold text-primary leading-[0.98]">
              {t.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-secondary lg:ml-auto">
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, index) => (
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
};

const CTA = () => {
  const { language } = useLanguage();
  const t = CTA_TEXT[language];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-primary">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center flex flex-col items-center gap-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
          {t.tag}
        </p>
        <h2 className="text-[2.45rem] md:text-[4.25rem] font-bold text-white leading-[0.96]">
          {t.title}
        </h2>
        <p className="max-w-2xl text-white/68 text-base sm:text-lg leading-8">
          {t.desc}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <motion.a
            href={BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-full text-sm font-bold shadow-[0_8px_40px_rgba(255,59,48,0.35)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles size={17} />
            {t.button}
          </motion.a>
          <motion.a
            href={CONTACT_URL}
            className="flex items-center gap-2.5 border-2 border-white/75 bg-white/8 px-8 py-3.5 rounded-full text-sm font-bold text-white"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} />
            {t.contact}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

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
        <img src={doggiesPoster} alt="" className="block w-full h-auto" loading="lazy" />
      </motion.div>
    </div>
  </section>
);

export const Home = () => {
  const { language } = useLanguage();
  const t = HOME_TEXT[language];

  return (
    <div className="min-h-screen">
      <main>
        <section
          className="relative overflow-hidden flex items-start sm:min-h-svh sm:items-center justify-center"
          style={{
            background:
              "linear-gradient(160deg, #f7f8f5 0%, #e8ece8 58%, #d6dcd6 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-35 bg-[repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />
          <div className="relative z-10 w-full pt-3 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 md:px-6 flex flex-col items-center justify-start sm:min-h-svh sm:justify-center gap-3 sm:gap-8">
            <HeroPoster />
            <HeroActions />

          <motion.div
            className="relative w-full max-w-5xl px-2 text-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            <p className="relative inline-flex -rotate-2 rounded-lg border-2 border-black bg-accent px-5 py-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.26em] text-white shadow-[6px_6px_0_rgba(0,0,0,0.24)]">
              {t.heroTag}
            </p>
            <h1 className="relative mx-auto mt-4 sm:mt-5 max-w-5xl text-[2.05rem] sm:text-[3rem] md:text-[4.35rem] font-extrabold leading-[0.95] text-primary">
              {t.heroTitle}
            </h1>
            <p className="relative mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base font-medium leading-6 sm:leading-7 text-secondary">
              {t.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>
      <ScaleOfSilence />
      <HomeContent />
      <HowItWorks />
      <Gallery />
      <CTA />
      <BottomPoster />
      </main>
    </div>
  );
};
