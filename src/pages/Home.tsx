import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Clock3,
  Database,
  FileText,
  HeartPulse,
  Mail,
  MapPin,
  Medal,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import adoptDontKill from "../../adopt_dont_kill.webp";
import doggies from "../../doggies.webp";
import dogKilled from "../../dog_killed.webp";
import greenDogSad from "../../green_dog_sad.webp";

const BETA_URL = "/beta-test";
const CONTACT_FORM_URL = "/contact#contact-form";

type Language = "ru" | "en";

type ProcessStep = {
  title: string;
  desc: string;
  Icon: typeof Camera;
};

type PageCopy = {
  heroTimer: string;
  heroTitle: string;
  heroLead: string;
  heroButton: string;
  problemEyebrow: string;
  problemTitle: string;
  problemIntro: string;
  problemCards: { value: string; text: string }[];
  problemClose: string;
  armorEyebrow: string;
  armorTitle: string;
  armorBody: string[];
  armorCards: { title: string; desc: string }[];
  howEyebrow: string;
  howTitle: string;
  howLead: string;
  steps: ProcessStep[];
  businessEyebrow: string;
  businessTitle: string;
  businessLead: string;
  businessCards: { title: string; desc: string; Icon: typeof Stethoscope }[];
  flywheelEyebrow: string;
  flywheelTitle: string;
  flywheelSteps: string[];
  flywheelBody: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

const COPY: Record<Language, PageCopy> = {
  ru: {
    heroTimer: "119:59:58 до эвтаназии",
    heroTitle: "У них есть всего 5 дней.",
    heroLead:
      "Проект Kyshik создан, чтобы остановить конвейер смерти. Мы предлагаем прозрачный цифровой учет вместо слепого истребления. Мы превращаем фотографии с вашего телефона в верифицированные цифровые паспорта, давая бездомным животным имя, историю и право на жизнь.",
    heroButton: "Получить доступ к бета-тестированию",
    problemEyebrow: "Суровая реальность",
    problemTitle: "230 000 собак убито за 2025 год. И это только начало.",
    problemIntro:
      "8 апреля 2026 года были приняты поправки в закон, легализующие массовое уничтожение бездомных животных. Старая схема отлов - стерилизация - вакцинация - выпуск сломана.",
    problemCards: [
      {
        value: "5 дней",
        text: "есть у отловленной собаки без микрочипа, чтобы ее забрали. Иначе - смерть.",
      },
      {
        value: "60 дней",
        text: "есть у тех, кому повезло иметь чип.",
      },
      {
        value: "86%",
        text: "пойманных собак уничтожаются по данным правительства.",
      },
    ],
    problemClose:
      "Почему так происходит? Из-за фрагментации данных. Бездомные или потерянные животные не имеют цифровой истории. Для системы их не существует.",
    armorEyebrow: "Цифровая броня",
    armorTitle: "Нет данных = нет ответственности.",
    armorBody: [
      "Когда собака - это просто цифра в бумажном отчете, ее легко списать. Без доказательств и истории любую собаку могут объявить опасной, чтобы оправдать убийство.",
      "С Kyshik каждый пес перестает быть невидимкой. У него появляется цифровая личность. Животное с историей, за которым в приложении следят десятки людей, сложнее убить безнаказанно.",
    ],
    armorCards: [
      {
        title: "История вместо номера",
        desc: "Фото, геометки, даты и заметки собираются в один живой профиль.",
      },
      {
        title: "Прозрачность вместо слепых зон",
        desc: "Запись видна сообществу, клиникам, приютам и партнерам, которым нужен проверяемый контекст.",
      },
      {
        title: "Доказательства вместо слухов",
        desc: "Каждое наблюдение оставляет проверяемый след и снижает риск безнаказанного списания.",
      },
    ],
    howEyebrow: "Как это работает",
    howTitle: "Kyshik превращает сбор данных в игру с реальным последствием.",
    howLead:
      "Мы не опираемся только на волонтеров. Карта, миссии, серии наблюдений и ИИ-распознавание помогают обычным людям собирать данные, которые потом могут спасти жизнь.",
    steps: [
      {
        Icon: MapPin,
        title: "Найти",
        desc: "Откройте приложение с картой: выполняйте миссии, собирайте коллекции, поддерживайте streaks и поднимайтесь в локальных рейтингах.",
      },
      {
        Icon: FileText,
        title: "Сформировать паспорт",
        desc: "Каждая загрузка фотографий, геометок и заметок автоматически формирует первичный черновик цифрового паспорта животного.",
      },
      {
        Icon: BadgeCheck,
        title: "Обогатить историю",
        desc: "Встретили ту же собаку снова? ИИ сопоставляет визуальные признаки и геолокацию, не создает дубликаты, а дополняет единый паспорт.",
      },
      {
        Icon: Stethoscope,
        title: "Передать профессионалам",
        desc: "Когда животное попадает в клинику, приют или к новому владельцу, паспорт становится официальной портативной записью.",
      },
    ],
    businessEyebrow: "Инфраструктура для бизнеса",
    businessTitle: "Слой данных корпоративного уровня для животных без истории.",
    businessLead:
      "Kyshik делает записи о животных полезными еще до сканирования чипа, вне клиник и в полевых условиях.",
    businessCards: [
      {
        Icon: Stethoscope,
        title: "Для ветеринарных клиник",
        desc: "Портативный паспорт с фото, отметками времени и контекстом спасения ускоряет triage и помогает принимать обоснованные решения о лечении.",
      },
      {
        Icon: Building2,
        title: "Для страховых компаний",
        desc: "Верифицированная базовая информация снижает слепые зоны при андеррайтинге и поддерживает урегулирование убытков доказательствами с отметками времени.",
      },
    ],
    flywheelEyebrow: "Наш маховик данных",
    flywheelTitle: "Больше участия - больше защиты.",
    flywheelSteps: [
      "Больше пользователей",
      "Больше уличных наблюдений",
      "Более подробные паспорта",
      "Защита от эвтаназии",
      "Рост ценности данных",
    ],
    flywheelBody:
      "Это инфраструктура, где за каждой собакой стоит история. Кем она была? Где жила? Была ли стерилизована? Чем больше ответов, тем сложнее стереть животное из системы.",
    ctaTitle: "Нельзя игнорировать того, кого ты уже увидел.",
    ctaBody:
      "Система не видит их. Статистика их игнорирует. Станьте глазами системы. Помогите нам вести учет, чтобы спасти тех, кто не может постоять за себя.",
    ctaButton: "Присоединиться к Kyshik",
  },
  en: {
    heroTimer: "119:59:58 until euthanasia",
    heroTitle: "They only have 5 days.",
    heroLead:
      "Kyshik exists to stop the death conveyor. We offer transparent digital records instead of blind extermination. Photos from your phone become verified digital passports, giving stray animals a name, a history, and a claim to life.",
    heroButton: "Get access to beta testing",
    problemEyebrow: "The hard reality",
    problemTitle: "230,000 dogs were killed in 2025. And this is only the beginning.",
    problemIntro:
      "On April 8, 2026, legal changes opened the door to mass destruction of stray animals. The old catch - sterilize - vaccinate - release model is broken.",
    problemCards: [
      { value: "5 days", text: "for a captured dog without a microchip to be claimed. Otherwise, death." },
      { value: "60 days", text: "for those lucky enough to have a chip." },
      { value: "86%", text: "of captured dogs are destroyed according to government data." },
    ],
    problemClose:
      "Why does this happen? Because data is fragmented. Stray or lost animals have no digital history. To the system, they do not exist.",
    armorEyebrow: "Digital armor",
    armorTitle: "No data = no accountability.",
    armorBody: [
      "When a dog is just a number in a paper report, it is easy to write off. Without evidence and history, any dog can be labeled dangerous to justify killing.",
      "With Kyshik, every dog stops being invisible. It gains a digital identity. An animal with a history, followed by people in the app, is harder to erase without consequence.",
    ],
    armorCards: [
      { title: "A story, not a number", desc: "Photos, geotags, dates, and notes gather into one living profile." },
      { title: "Transparency, not blind spots", desc: "The record can support communities, clinics, shelters, and partners who need verified context." },
      { title: "Evidence, not rumors", desc: "Every observation leaves a verifiable trail and reduces the risk of silent write-offs." },
    ],
    howEyebrow: "How it works",
    howTitle: "Kyshik turns data collection into a game with real consequences.",
    howLead:
      "We do not rely only on volunteers. A map, missions, streaks, rankings, and AI recognition help everyday people collect data that can later save a life.",
    steps: [
      { Icon: MapPin, title: "Find", desc: "Open the map, complete missions, collect sightings, maintain streaks, and rise in local rankings." },
      { Icon: FileText, title: "Create a passport", desc: "Every upload of photos, geotags, and notes creates the first draft of an animal's digital passport." },
      { Icon: BadgeCheck, title: "Enrich the history", desc: "Saw the same dog again? AI matches visual traits and location, avoids duplicates, and updates the same passport." },
      { Icon: Stethoscope, title: "Hand it to professionals", desc: "When an animal reaches a clinic, shelter, or new owner, the passport becomes a portable official record." },
    ],
    businessEyebrow: "Business infrastructure",
    businessTitle: "Enterprise-grade animal data for lives that had no records.",
    businessLead:
      "Kyshik makes animal records useful before a chip scan, outside clinics, and in field conditions.",
    businessCards: [
      { Icon: Stethoscope, title: "For veterinary clinics", desc: "A portable passport with photos, timestamps, and rescue context speeds up triage and supports better treatment decisions." },
      { Icon: Building2, title: "For insurers", desc: "Verified baseline information reduces underwriting blind spots and supports claims with timestamped evidence." },
    ],
    flywheelEyebrow: "Our data flywheel",
    flywheelTitle: "More participation means more protection.",
    flywheelSteps: ["More users", "More street sightings", "Richer passports", "Protection from euthanasia", "Higher data value"],
    flywheelBody:
      "This is infrastructure where every dog has a history. Who was it? Where did it live? Was it sterilized? The more answers exist, the harder an animal is to erase.",
    ctaTitle: "You cannot ignore someone you have already seen.",
    ctaBody:
      "The system does not see them. Statistics ignore them. Become the eyes of the system. Help us keep records and protect those who cannot defend themselves.",
    ctaButton: "Join Kyshik",
  },
};

const SectionLabel = ({ children, dark = false }: { children: string; dark?: boolean }) => (
  <p className={`text-xs font-extrabold uppercase tracking-[0.26em] ${dark ? "text-white/55" : "text-accent"}`}>
    {children}
  </p>
);

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.58, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Hero = ({ t }: { t: PageCopy }) => (
  <section className="relative overflow-hidden bg-black px-3 py-3 text-white sm:px-5 sm:py-5">
    <div className="relative min-h-[calc(100svh-5.5rem)] overflow-hidden border border-white/22 bg-primary shadow-[0_28px_80px_rgba(0,0,0,0.48)]">
      <img
        src={dogKilled}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-74"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_50%,rgba(255,255,255,0.1),rgba(0,0,0,0.34)_34%,rgba(0,0,0,0.9)_82%)]" />
      <div className="absolute inset-0 opacity-12 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.11),rgba(255,255,255,0.11)_1px,transparent_1px,transparent_5px)]" />

      <div className="relative z-10 flex min-h-[calc(100svh-5.5rem)] flex-col justify-between px-5 pb-6 pt-24 sm:px-8 sm:pt-28 lg:px-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="inline-flex items-center gap-3 border border-white/34 bg-black/42 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[6px_6px_0_rgba(255,59,48,0.36)] backdrop-blur-sm sm:text-xs">
            <Clock3 className="h-4 w-4 text-accent" />
            {t.heroTimer}
          </div>
          <h1 className="mt-6 max-w-4xl text-[3.2rem] font-extrabold leading-[0.86] tracking-normal text-white drop-shadow-[0_10px_34px_rgba(0,0,0,0.92)] sm:text-[5.8rem] lg:text-[7.4rem]">
            {t.heroTitle}
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_auto_1fr]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="max-w-md text-sm font-bold leading-7 text-white/90 drop-shadow-[0_3px_18px_rgba(0,0,0,0.78)] sm:text-base">
            {t.heroLead}
          </div>

          <div className="hidden justify-self-center text-center text-lg font-extrabold leading-tight text-white md:block">
            <p>Kyshik</p>
            <p className="text-white/82">See To Be Seen</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <motion.a
              href={BETA_URL}
              className="inline-flex w-full min-w-0 max-w-[22rem] items-center justify-center gap-2.5 bg-accent px-5 py-3.5 text-center text-xs font-extrabold text-white shadow-[7px_7px_0_rgba(0,0,0,0.42)] transition-colors hover:bg-white hover:text-primary sm:w-auto sm:max-w-none sm:text-sm"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="h-5 w-5 flex-none" />
              <span className="min-w-0 whitespace-normal leading-5">{t.heroButton}</span>
            </motion.a>
            <Link
              to={CONTACT_FORM_URL}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2.5 border border-white/22 bg-white/10 px-5 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary sm:w-auto"
            >
              <Mail className="h-5 w-5 flex-none" />
              <span className="min-w-0">Contact us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Problem = ({ t }: { t: PageCopy }) => (
  <section id="about" className="bg-surface py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <FadeIn>
          <SectionLabel>{t.problemEyebrow}</SectionLabel>
          <h2 className="mt-5 text-[2.75rem] font-extrabold leading-[0.92] text-primary sm:text-[4.5rem] lg:text-[5.5rem]">
            230 000
          </h2>
          <p className="mt-5 max-w-xl text-2xl font-extrabold leading-tight text-primary sm:text-4xl">
            {t.problemTitle.replace("230 000 ", "").replace("230,000 ", "")}
          </p>
        </FadeIn>
        <FadeIn className="lg:pt-12">
          <p className="text-lg leading-8 text-secondary">{t.problemIntro}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.problemCards.map((card) => (
              <article key={card.value} className="rounded-lg border-2 border-black/70 bg-card p-5 shadow-[0_8px_0_rgba(0,0,0,0.16)]">
                <p className="text-4xl font-extrabold text-accent">{card.value}</p>
                <p className="mt-3 text-sm leading-6 text-secondary">{card.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 border-l-4 border-accent pl-5 text-lg font-semibold leading-8 text-primary">
            {t.problemClose}
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Armor = ({ t }: { t: PageCopy }) => (
  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6">
      <FadeIn className="max-w-4xl">
        <SectionLabel>{t.armorEyebrow}</SectionLabel>
        <h2 className="mt-5 text-[2.6rem] font-extrabold leading-[0.95] text-primary sm:text-[4.7rem]">
          {t.armorTitle}
        </h2>
        <div className="mt-7 space-y-5 text-lg leading-8 text-secondary">
          {t.armorBody.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.armorCards.map((card, index) => (
          <FadeIn key={card.title}>
            <article className="h-full rounded-lg border-2 border-black/70 bg-card p-6 shadow-[0_8px_0_rgba(0,0,0,0.16)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                {[ShieldCheck, HeartPulse, Database][index] &&
                  (() => {
                    const Icon = [ShieldCheck, HeartPulse, Database][index];
                    return <Icon className="h-5 w-5" />;
                  })()}
              </div>
              <h3 className="mt-6 text-2xl font-extrabold leading-tight text-primary">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-secondary">{card.desc}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = ({ t, language }: { t: PageCopy; language: Language }) => (
  <section id="how" className="bg-primary py-20 text-white sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6">
      <FadeIn className="max-w-4xl">
        <SectionLabel dark>{t.howEyebrow}</SectionLabel>
        <h2 className="mt-5 text-[2.55rem] font-extrabold leading-[0.95] sm:text-[4.4rem]">
          {t.howTitle}
        </h2>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">{t.howLead}</p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-4">
        {t.steps.map(({ Icon, title, desc }, index) => (
          <FadeIn key={title}>
            <article className="relative h-full rounded-lg border-2 border-white/18 bg-white/7 p-6 shadow-[0_8px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-extrabold text-accent">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-2xl font-extrabold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/68">{desc}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 grid grid-cols-1 items-center gap-6 rounded-lg border-2 border-white/18 bg-white/7 p-4 shadow-[0_8px_0_rgba(255,255,255,0.08)] sm:p-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="grid grid-cols-1 gap-4">
          <img src={adoptDontKill} alt="" className="mx-auto max-h-64 w-full object-contain" loading="lazy" />
          <div className="grid grid-cols-3 gap-3">
            {[Trophy, Medal, Sparkles].map((Icon, index) => (
              <div key={index} className="rounded-lg border border-white/14 bg-white/8 p-4 text-center">
                <Icon className="mx-auto h-6 w-6 text-accent" />
                <div className="mt-3 h-2 rounded-full bg-white/14">
                  <div className="h-2 rounded-full bg-accent" style={{ width: `${58 + index * 16}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-l-0 border-white/14 pl-0 lg:border-l lg:pl-8">
          <p className="text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            {language === "en"
              ? "Every sighting strengthens one living record."
              : "Каждое наблюдение усиливает один живой паспорт."}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            {language === "en"
              ? "The interface stays simple: find an animal, add context, and let the record grow over time."
              : "Интерфейс остается простым: найти животное, добавить контекст и дать записи расти со временем."}
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Business = ({ t }: { t: PageCopy }) => (
  <section id="proof" className="bg-surface py-20 sm:py-24">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <FadeIn>
        <SectionLabel>{t.businessEyebrow}</SectionLabel>
        <h2 className="mt-5 text-[2.55rem] font-extrabold leading-[0.95] text-primary sm:text-[4.4rem]">
          {t.businessTitle}
        </h2>
        <p className="mt-7 text-lg leading-8 text-secondary">{t.businessLead}</p>
      </FadeIn>
      <div className="space-y-5">
        {t.businessCards.map(({ Icon, title, desc }) => (
          <FadeIn key={title}>
            <article className="rounded-lg border-2 border-black/70 bg-card p-6 shadow-[0_8px_0_rgba(0,0,0,0.16)] sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-accent text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-primary">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-secondary">{desc}</p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Flywheel = ({ t }: { t: PageCopy }) => (
  <section className="overflow-hidden bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6">
      <FadeIn className="max-w-4xl">
        <SectionLabel>{t.flywheelEyebrow}</SectionLabel>
        <h2 className="mt-5 text-[2.6rem] font-extrabold leading-[0.95] text-primary sm:text-[4.6rem]">
          {t.flywheelTitle}
        </h2>
      </FadeIn>
      <div className="mt-12 grid grid-cols-1 items-stretch gap-3 lg:grid-cols-5">
        {t.flywheelSteps.map((step, index) => (
          <FadeIn key={step}>
            <div className="flex h-full items-center gap-3 rounded-lg border-2 border-black/70 bg-card p-5 shadow-[0_8px_0_rgba(0,0,0,0.16)] lg:flex-col lg:items-start">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <p className="text-lg font-extrabold leading-tight text-primary">{step}</p>
              {index < t.flywheelSteps.length - 1 && (
                <ArrowRight className="ml-auto h-5 w-5 text-accent lg:ml-0 lg:mt-auto" />
              )}
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="relative overflow-hidden rounded-lg bg-primary/5 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
          <img src={doggies} alt="" className="mx-auto block h-auto w-full rounded-md object-contain" loading="lazy" />
          <img
            src={greenDogSad}
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 w-[38%] translate-x-[5%] translate-y-[6%] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)]"
            loading="lazy"
          />
        </div>
        <p className="text-2xl font-extrabold leading-snug text-primary sm:text-4xl">{t.flywheelBody}</p>
      </FadeIn>
    </div>
  </section>
);

const CTA = ({ t }: { t: PageCopy }) => (
  <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
    <div className="pointer-events-none absolute inset-0 opacity-20 bg-[repeating-linear-gradient(-18deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)]" />
    <FadeIn className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
      <h2 className="text-[2.8rem] font-extrabold leading-[0.92] sm:text-[5rem]">{t.ctaTitle}</h2>
      <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/74">{t.ctaBody}</p>
      <motion.a
        href={BETA_URL}
        className="mt-9 inline-flex max-w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-extrabold text-white shadow-[0_14px_32px_rgba(255,59,48,0.38)]"
        whileHover={{ scale: 1.035 }}
        whileTap={{ scale: 0.98 }}
      >
        <Sparkles className="h-5 w-5 flex-none" />
        <span className="min-w-0 whitespace-normal">{t.ctaButton}</span>
      </motion.a>
      <Link
        to={CONTACT_FORM_URL}
        className="mt-4 inline-flex max-w-full items-center justify-center gap-2.5 rounded-full border-2 border-white/22 bg-white/8 px-8 py-4 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
      >
        <Mail className="h-5 w-5 flex-none" />
        <span className="min-w-0">Contact us</span>
      </Link>
    </FadeIn>
  </section>
);

export const Home = () => {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <div className="min-h-screen">
      <Hero t={t} />
      <Problem t={t} />
      <Armor t={t} />
      <HowItWorks t={t} language={language} />
      <Business t={t} />
      <Flywheel t={t} />
      <CTA t={t} />
    </div>
  );
};
