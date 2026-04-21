import { motion } from "motion/react";
import {
  BadgeCheck,
  Building2,
  Camera,
  Cpu,
  Database,
  FileCheck2,
  Fingerprint,
  HeartHandshake,
  Mail,
  Map,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

import posterArt from "../../stop_killing_dogs.webp";
import dogSwag from "../../dog_swag.webp";
import confusedDoggy from "../../confused_doggy.webp";
import dogScreaming from "../../dog_screaming.webp";
import adoptDontKill from "../../adopt_dont_kill.webp";
import dogSad from "../../dog_sad.webp";
import doggiesPoster from "../../doggies.webp";
import pawsPoster from "../../paws.webp";
import { useLanguage } from "../context/LanguageContext";

const BETA_URL = "https://tally.so/r/rjrG2p";
const CONTACT_URL = "/contact";

type Language = "ru" | "en";

type SectionItem = {
  title: string;
  desc: string;
  Icon:
    | typeof Camera
    | typeof Fingerprint
    | typeof Search
    | typeof FileCheck2
    | typeof Building2
    | typeof HeartHandshake
    | typeof Users
    | typeof ShieldCheck
    | typeof Map
    | typeof BadgeCheck
    | typeof Cpu
    | typeof Database
    | typeof Smartphone
    | typeof Server;
};

type PageCopy = {
  heroTag: string;
  heroTitle: string;
  heroDesc: string;
  betaButton: string;
  partnerButton: string;
  heroSignals: string[];
  heroPosterNotes: string[];
  engineTag: string;
  engineTitle: string;
  engineItems: SectionItem[];
  engineAccent: string;
  ecosystemTag: string;
  ecosystemTitle: string;
  ecosystemItems: SectionItem[];
  evidenceTag: string;
  evidenceTitle: string;
  evidenceDesc: string;
  evidenceItems: SectionItem[];
  techTag: string;
  techTitle: string;
  techDesc: string;
  techItems: SectionItem[];
  ctaTitle: string;
  ctaDesc: string;
};

const PAGE_TEXT: Record<Language, PageCopy> = {
  ru: {
    heroTag: "See to be seen",
    heroTitle: "доказательная аналитика для управления популяцией животных.",
    heroDesc:
      "Мы превращаем разрозненные визуальные наблюдения в структурированные данные. Наша технология позволяет городам и профильным организациям принимать управленческие решения на основе реальных фактов, а не догадок.",
    betaButton: "Присоединиться к Beta",
    partnerButton: "API и партнерство",
    heroSignals: ["Уникальный ID", "Скрытые координаты", "Доказательные данные"],
    heroPosterNotes: ["Biometric Re-ID", "Evidence Layer"],
    engineTag: "Kyshik Engine",
    engineTitle: "Как работает Kyshik Engine",
    engineItems: [
      {
        Icon: Camera,
        title: "Smart Capture",
        desc: "ИИ-фильтр автоматически детектирует и изолирует животное, очищая кадр от визуального шума.",
      },
      {
        Icon: Fingerprint,
        title: "Biometric Re-ID",
        desc: "Модель извлекает уникальный векторный отпечаток ключевых признаков особи.",
      },
      {
        Icon: Search,
        title: "Cross-Reference",
        desc: "Векторный поиск в облачной базе данных находит совпадения в режиме реального времени.",
      },
      {
        Icon: FileCheck2,
        title: "Evidence-Based Reporting",
        desc: "Система генерирует отчет с индексом достоверности для верификации и принятия решений.",
      },
    ],
    engineAccent:
      "Наша архитектура достигает высокой точности идентификации, сохраняя устойчивость к динамике движения и сложному городскому освещению.",
    ecosystemTag: "Для кого",
    ecosystemTitle: "Экосистема Kyshik",
    ecosystemItems: [
      {
        Icon: Building2,
        title: "Smart City",
        desc: "Оптимизация муниципальных бюджетов, мониторинг зон риска и планирование инфраструктуры на основе достоверных данных.",
      },
      {
        Icon: HeartHandshake,
        title: "Приюты и фонды",
        desc: "Автоматизированная система учета, позволяющая отслеживать статус каждой особи и автоматизировать отчетность.",
      },
      {
        Icon: Users,
        title: "Сообщество",
        desc: "Инструмент создания цифрового следа, превращающий волонтерскую активность в доказательную базу для защиты животных.",
      },
    ],
    evidenceTag: "Evidence Layer",
    evidenceTitle: "Evidence Layer: Прозрачность как стандарт",
    evidenceDesc: "Мы не просто храним фото — мы верифицируем факты жизни.",
    evidenceItems: [
      {
        Icon: ShieldCheck,
        title: "Privacy-by-Design",
        desc: "Мы исключаем использование точных геолокационных данных в открытом доступе. Все данные проходят через алгоритмы размытия координат.",
      },
      {
        Icon: Map,
        title: "Heat Maps",
        desc: "Доступ предоставляется только к агрегированным тепловым картам плотности популяции.",
      },
      {
        Icon: BadgeCheck,
        title: "Достоверность",
        desc: "Каждая запись в базе данных подкреплена идентификатором, исключающим дублирование и фальсификацию данных.",
      },
    ],
    techTag: "Инженерная экспертиза",
    techTitle: "Инженерная экспертиза",
    techDesc: "Мы создаем масштабируемую IT-инфраструктуру на базе современных AI-решений:",
    techItems: [
      {
        Icon: Cpu,
        title: "Модели",
        desc: "Vision Transformers для высокоточной классификации и распознавания.",
      },
      {
        Icon: Database,
        title: "Базы данных",
        desc: "Векторные БД для сверхбыстрого поиска среди миллионов записей.",
      },
      {
        Icon: Smartphone,
        title: "Pipeline",
        desc: "Методы машинного обучения, адаптированные для работы с низкокачественными данными пользовательских устройств.",
      },
      {
        Icon: Server,
        title: "Edge-friendly",
        desc: "Архитектура готова к масштабированию и интеграции в городские и партнерские контуры.",
      },
    ],
    ctaTitle: "Подключайте пилоты, данные и интеграции",
    ctaDesc:
      "Kyshik дает городам и профильным организациям инфраструктуру, в которой каждое наблюдение превращается в управляемый факт.",
  },
  en: {
    heroTag: "See to be seen",
    heroTitle: "is evidence-based analytics for animal population management.",
    heroDesc:
      "We turn fragmented visual observations into structured data. Our technology helps cities and specialized organizations make management decisions based on real evidence rather than guesswork.",
    betaButton: "Join Beta",
    partnerButton: "API & Partnerships",
    heroSignals: ["Unique ID", "Protected Location", "Evidence Layer"],
    heroPosterNotes: ["Biometric Re-ID", "Evidence Layer"],
    engineTag: "Kyshik Engine",
    engineTitle: "How Kyshik Engine Works",
    engineItems: [
      {
        Icon: Camera,
        title: "Smart Capture",
        desc: "An AI filter automatically detects and isolates the animal, clearing the frame of visual noise.",
      },
      {
        Icon: Fingerprint,
        title: "Biometric Re-ID",
        desc: "The model extracts a unique vector signature from the animal's key features.",
      },
      {
        Icon: Search,
        title: "Cross-Reference",
        desc: "Vector search across the cloud database finds matches in real time.",
      },
      {
        Icon: FileCheck2,
        title: "Evidence-Based Reporting",
        desc: "The system generates a report with a confidence index for verification and decision-making.",
      },
    ],
    engineAccent:
      "Our architecture achieves high identification accuracy while remaining robust to motion dynamics and difficult urban lighting.",
    ecosystemTag: "Who It Serves",
    ecosystemTitle: "The Kyshik Ecosystem",
    ecosystemItems: [
      {
        Icon: Building2,
        title: "Smart City",
        desc: "Optimize municipal budgets, monitor risk zones, and plan infrastructure using trustworthy data.",
      },
      {
        Icon: HeartHandshake,
        title: "Shelters & Foundations",
        desc: "An automated record system that tracks the status of each animal and streamlines reporting.",
      },
      {
        Icon: Users,
        title: "Community",
        desc: "A digital trail that turns volunteer activity into evidence for protecting animals.",
      },
    ],
    evidenceTag: "Evidence Layer",
    evidenceTitle: "Evidence Layer: Transparency as a Standard",
    evidenceDesc: "We do not just store photos. We verify facts of life.",
    evidenceItems: [
      {
        Icon: ShieldCheck,
        title: "Privacy-by-Design",
        desc: "We exclude exact geolocation data from public access. All data passes through coordinate-blurring algorithms.",
      },
      {
        Icon: Map,
        title: "Heat Maps",
        desc: "Access is limited to aggregated heat maps of population density.",
      },
      {
        Icon: BadgeCheck,
        title: "Reliability",
        desc: "Every record is backed by an identifier that prevents duplication and data falsification.",
      },
    ],
    techTag: "Engineering Expertise",
    techTitle: "Engineering Expertise",
    techDesc: "We build scalable IT infrastructure on top of modern AI systems:",
    techItems: [
      {
        Icon: Cpu,
        title: "Models",
        desc: "Vision Transformers for high-precision classification and recognition.",
      },
      {
        Icon: Database,
        title: "Databases",
        desc: "Vector databases for extremely fast search across millions of records.",
      },
      {
        Icon: Smartphone,
        title: "Pipeline",
        desc: "Machine learning methods adapted to low-quality data from user devices.",
      },
      {
        Icon: Server,
        title: "Edge-friendly",
        desc: "An architecture designed for scale and for integration into city and partner systems.",
      },
    ],
    ctaTitle: "Connect pilots, data, and integrations",
    ctaDesc:
      "Kyshik gives cities and domain organizations an infrastructure where every observation becomes an actionable fact.",
  },
};

type DogOverlay = {
  src: string;
  className: string;
  float: Record<string, number[]>;
  duration: number;
  delay: number;
  origin: string;
};

const DOG_OVERLAYS: DogOverlay[] = [
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

const HeroSignalRail = ({ items }: { items: string[] }) => (
  <motion.div
    className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-7 sm:gap-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
  >
    {items.map((item, index) => (
      <motion.div
        key={item}
        className="inline-flex items-center gap-2 rounded-full border-2 border-black/75 bg-white/80 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur sm:px-4 sm:text-[11px]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
        whileHover={{ y: -2 }}
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span>{item}</span>
      </motion.div>
    ))}
  </motion.div>
);

const HeroPoster = ({ notes }: { notes: string[] }) => (
  <motion.div
    className="relative w-full max-w-[22rem] sm:max-w-[60rem]"
    initial={{ opacity: 0, y: 16, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
  >
    <div className="pointer-events-none absolute inset-x-[8%] top-[6%] h-24 rounded-full bg-accent/30 blur-3xl sm:inset-x-[18%] sm:h-28" />
    <div className="pointer-events-none absolute inset-x-[18%] bottom-[2%] h-24 rounded-full bg-black/12 blur-3xl sm:inset-x-[24%] sm:h-20" />

    <motion.div
      className="pointer-events-none absolute left-0 top-[12%] z-30 hidden -translate-x-[18%] sm:block"
      animate={{ y: [0, -6, 0], rotate: [-3, -1, -3] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="rounded-full border-2 border-black bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
        {notes[0]}
      </div>
    </motion.div>

    <motion.div
      className="pointer-events-none absolute bottom-[10%] right-0 z-30 hidden translate-x-[12%] sm:block"
      animate={{ y: [0, -7, 0], rotate: [2, 0, 2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
    >
      <div className="rounded-full border-2 border-black bg-accent px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(255,59,48,0.26)]">
        {notes[1]}
      </div>
    </motion.div>

    <div className="relative overflow-hidden rounded-[20px] border-4 border-black/80 shadow-[0_20px_65px_rgba(0,0,0,0.38)] rotate-[-0.35deg]">
      <div className="absolute left-[8%] top-0 z-20 h-6 w-20 -rotate-2 rounded-b-sm bg-black/55" />
      <div className="absolute right-[9%] top-0 z-20 h-6 w-20 rotate-2 rounded-b-sm bg-black/55" />

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
    </div>
  </motion.div>
);

const HeroActions = ({
  betaLabel,
  partnerLabel,
}: {
  betaLabel: string;
  partnerLabel: string;
}) => (
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
      className="flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-xs font-bold text-white shadow-[0_8px_32px_rgba(255,59,48,0.36)] sm:px-9 sm:py-4 sm:text-sm"
      whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(255,59,48,0.46)" }}
      whileTap={{ scale: 0.97 }}
    >
      <Sparkles size={16} />
      {betaLabel}
    </motion.a>
    <motion.a
      href={CONTACT_URL}
      className="flex items-center gap-2.5 rounded-full border-2 border-black/80 bg-white px-6 py-3 text-xs font-bold text-primary shadow-[0_8px_22px_rgba(0,0,0,0.16)] sm:px-7 sm:py-3.5 sm:text-sm"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <Mail size={16} />
      {partnerLabel}
    </motion.a>
  </motion.div>
);

const SectionIntro = ({
  tag,
  title,
  desc,
  dark = false,
}: {
  tag: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) => (
  <motion.div
    className="max-w-4xl"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <p className={`mb-5 text-xs font-bold uppercase tracking-[0.28em] ${dark ? "text-accent" : "text-accent"}`}>
      {tag}
    </p>
    <h2 className={`text-[2.2rem] font-extrabold leading-[0.95] md:text-[4rem] ${dark ? "text-white" : "text-primary"}`}>
      {title}
    </h2>
    {desc && (
      <p className={`mt-6 max-w-3xl text-base leading-8 sm:text-lg ${dark ? "text-white/70" : "text-secondary"}`}>
        {desc}
      </p>
    )}
  </motion.div>
);

const EngineSection = ({ t }: { t: PageCopy }) => (
  <section className="bg-primary py-20 text-white sm:py-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionIntro tag={t.engineTag} title={t.engineTitle} dark />

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
        {t.engineItems.map(({ Icon, title, desc }, index) => (
          <motion.article
            key={title}
            className="relative rounded-lg border-2 border-white/20 bg-white/7 p-6 shadow-[0_8px_0_rgba(255,255,255,0.08)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs font-extrabold text-accent">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-extrabold leading-tight text-white">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-white/68">{desc}</p>
          </motion.article>
        ))}
      </div>

      <motion.p
        className="mt-8 max-w-4xl text-base leading-8 text-white/78 sm:text-lg"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t.engineAccent}
      </motion.p>
    </div>
  </section>
);

const EcosystemSection = ({ t }: { t: PageCopy }) => (
  <section className="bg-surface py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionIntro tag={t.ecosystemTag} title={t.ecosystemTitle} />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.ecosystemItems.map(({ Icon, title, desc }, index) => (
          <motion.article
            key={title}
            className="rounded-lg border-2 border-black/70 bg-card p-6 shadow-[0_8px_0_rgba(0,0,0,0.18)] sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-[1.45rem] font-bold leading-tight text-primary">{title}</h3>
            <p className="mt-4 text-base leading-7 text-secondary">{desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const EvidenceSection = ({ t }: { t: PageCopy }) => (
  <section className="relative overflow-hidden bg-white py-20 sm:py-24">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionIntro tag={t.evidenceTag} title={t.evidenceTitle} desc={t.evidenceDesc} />
      </div>

      <div className="space-y-5">
        {t.evidenceItems.map(({ Icon, title, desc }, index) => (
          <motion.article
            key={title}
            className="rounded-lg border-2 border-black/70 bg-card p-6 shadow-[0_8px_0_rgba(0,0,0,0.18)] sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[1.45rem] font-bold leading-tight text-primary">{title}</h3>
                <p className="mt-3 text-base leading-7 text-secondary">{desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const TechSection = ({ t }: { t: PageCopy }) => (
  <section className="bg-primary py-20 text-white sm:py-24">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
      <div className="lg:self-center">
        <SectionIntro tag={t.techTag} title={t.techTitle} desc={t.techDesc} dark />

        <div className="mt-10 space-y-4">
          {t.techItems.map(({ Icon, title, desc }, index) => (
            <motion.article
              key={title}
              className="rounded-lg border-2 border-white/18 bg-white/7 p-5 shadow-[0_8px_0_rgba(255,255,255,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-accent text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.figure
        className="overflow-hidden rounded-lg border-2 border-white/16 bg-white/6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={doggiesPoster}
          alt=""
          className="block h-full w-full object-cover"
          loading="lazy"
        />
      </motion.figure>
    </div>
  </section>
);

const CtaSection = ({ t }: { t: PageCopy }) => (
  <section className="bg-surface py-20 sm:py-24">
    <motion.div
      className="mx-auto flex max-w-4xl flex-col items-center gap-7 px-5 text-center sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Kyshik</p>
      <h2 className="text-[2.3rem] font-extrabold leading-[0.95] text-primary md:text-[4rem]">
        {t.ctaTitle}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-secondary sm:text-lg">
        {t.ctaDesc}
      </p>
      <HeroActions betaLabel={t.betaButton} partnerLabel={t.partnerButton} />
    </motion.div>
  </section>
);

export const Home = () => {
  const { language } = useLanguage();
  const t = PAGE_TEXT[language];

  return (
    <div className="min-h-screen">
      <main>
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #f7f8f5 0%, #e8ece8 58%, #d6dcd6 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-35 bg-[repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />
          <div className="pointer-events-none absolute left-1/2 top-[10%] h-40 w-[26rem] -translate-x-1/2 rounded-full bg-accent/16 blur-3xl sm:top-[14%] sm:h-56 sm:w-[40rem]" />
          <div className="pointer-events-none absolute left-[12%] top-[34%] hidden h-28 w-28 rounded-full border border-black/10 bg-white/28 blur-2xl sm:block" />
          <div className="pointer-events-none absolute right-[10%] top-[18%] hidden h-20 w-20 rounded-full border border-accent/20 bg-accent/10 blur-2xl sm:block" />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-7 px-3 pb-12 pt-8 text-center sm:min-h-svh sm:justify-center sm:gap-9 sm:px-6 sm:pb-12 sm:pt-24">
            <motion.div
              className="w-full max-w-[74rem] px-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
            >
              <p className="inline-flex -rotate-2 rounded-lg border-2 border-black bg-accent px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white shadow-[6px_6px_0_rgba(0,0,0,0.24)] sm:text-xs">
                {t.heroTag}
              </p>
              <h1 className="mx-auto mt-5 max-w-[70rem] text-[2.5rem] font-extrabold leading-[0.9] text-primary sm:mt-6 sm:text-[3.8rem] lg:text-[5.25rem]">
                <span className="block text-accent [text-shadow:0_10px_30px_rgba(255,59,48,0.18)]">Kyshik</span>
                <span className="block">{t.heroTitle}</span>
              </h1>
              <p className="mx-auto mt-5 max-w-[52rem] text-sm font-medium leading-7 text-secondary sm:mt-6 sm:text-base sm:leading-8">
                {t.heroDesc}
              </p>
              <HeroSignalRail items={t.heroSignals} />
              <div className="mt-7 flex justify-center sm:mt-8">
                <HeroActions betaLabel={t.betaButton} partnerLabel={t.partnerButton} />
              </div>
            </motion.div>

            <div className="w-full pt-1 sm:pt-3">
              <HeroPoster notes={t.heroPosterNotes} />
            </div>
          </div>
        </section>

        <EngineSection t={t} />
        <EcosystemSection t={t} />
        <EvidenceSection t={t} />
        <TechSection t={t} />
        <CtaSection t={t} />
      </main>
    </div>
  );
};
