import { Database, Gamepad2, LockKeyhole, ShieldCheck, Trophy } from "lucide-react";

type Language = "ru" | "en";

type Post = {
  slug: string;
  Icon: typeof ShieldCheck;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

type Stat = {
  value: string;
  label: string;
  desc: string;
};

const POSTS_RU: Post[] = [
  {
    slug: "ethical-ai-animal-registry",
    Icon: ShieldCheck,
    category: "Этика",
    date: "Будущий план",
    title: "Kyshik - технологии на защите, а не для слежки",
    excerpt:
      "Почему учет бездомных животных должен начинаться с приватности, а не с публикации точных координат.",
    body: [
      "Мы осознанно строим Kyshik как платформу защиты. Для нас каждое животное - это личность, а не объект для навигации.",
      "Точные геоданные могут быть опасны, если попадут не в те руки. Поэтому публичный слой системы должен показывать обществу статистику и динамику, но не раскрывать конфиденциальные локации.",
      "Наша цель - дать людям и организациям объективную картину для системных изменений. Эти данные должны помогать защищать животных, а не превращать их местоположение в открытую цель.",
    ],
  },
  {
    slug: "anonymous-counting",
    Icon: LockKeyhole,
    category: "Технологии",
    date: "Будущий план",
    title: "Анонимизированный учет: цифровой ID вместо GPS",
    excerpt:
      "Как ИИ может связывать наблюдения без публичной привязки животного к конкретному адресу.",
    body: [
      "Вместо того чтобы делать точную геопозицию главным идентификатором, Kyshik делает ставку на визуальный цифровой отпечаток животного.",
      "ИИ помогает сопоставлять новые снимки с уже существующей историей наблюдений. Так животное не исчезает из статистики, но его точное место не становится публичным.",
      "Для общественности важнее видеть объективную картину по району или городу: динамику, количество наблюдений, повторяемость и изменения во времени.",
    ],
  },
  {
    slug: "gamified-help",
    Icon: Gamepad2,
    category: "Геймификация",
    date: "Будущий план",
    title: "Миссии: маленькие задания вместо разовой акции",
    excerpt:
      "Небольшие задания помогают людям регулярно делать полезные наблюдения и возвращаться к помощи.",
    body: [
      "Мы превращаем учет в серию маленьких действий: сфотографировать, подтвердить, вернуться к наблюдению, помочь сообществу.",
      "Когда действие простое и понятное, участие перестает быть редким порывом. Оно становится привычкой, которую легче повторять.",
      "Игровые миссии должны направлять внимание людей туда, где нужна помощь, но не раскрывать опасные детали и не подталкивать к риску.",
    ],
  },
  {
    slug: "contribution-points",
    Icon: Trophy,
    category: "Геймификация",
    date: "Будущий план",
    title: "Очки вклада: как показать ценность каждого действия",
    excerpt:
      "За проверенные фото, повторные наблюдения и помощь системе растет личный прогресс.",
    body: [
      "Люди чаще возвращаются, когда видят, что их вклад имеет вес. Очки вклада помогают показать, что даже маленькое действие добавляет системе точности.",
      "Проверенное фото, повторное наблюдение, уточнение статуса или помощь другому пользователю могут становиться частью личного прогресса.",
      "Это не соревнование за место животного на карте. Это способ сделать заботу видимой и поддержать тех, кто помогает регулярно.",
    ],
  },
  {
    slug: "public-statistics",
    Icon: Database,
    category: "Данные",
    date: "Будущий план",
    title: "Объективная статистика для общественности",
    excerpt:
      "Как защищенные наблюдения могут стать аргументом для решений на уровне города и района.",
    body: [
      "Когда статистика расходится с реальностью, бездомные животные остаются невидимыми для системы. Kyshik должен закрыть этот разрыв.",
      "Общественность получает не точные координаты каждой собаки, а агрегированную картину: где проблема растет, где нужна стерилизация, где требуется поддержка волонтеров.",
      "Так данные становятся инструментом изменений, а не инструментом слежки.",
    ],
  },
];

const POSTS_EN: Post[] = [
  {
    slug: "ethical-ai-animal-registry",
    Icon: ShieldCheck,
    category: "Ethics",
    date: "Future plan",
    title: "Kyshik: technology for protection, not surveillance",
    excerpt:
      "Why stray animal counting should begin with privacy, not with publishing exact coordinates.",
    body: [
      "We intentionally build Kyshik as a protection platform. For us, every animal is a living individual, not a navigation target.",
      "Precise geodata can be dangerous in the wrong hands. That is why the public layer must show statistics and trends without exposing confidential locations.",
      "Our goal is to give people and organizations an objective picture for systemic change. Data should protect animals, not turn their location into an open target.",
    ],
  },
  {
    slug: "anonymous-counting",
    Icon: LockKeyhole,
    category: "Technology",
    date: "Future plan",
    title: "Anonymous counting: digital ID instead of GPS",
    excerpt:
      "How AI can connect observations without publicly linking an animal to a specific address.",
    body: [
      "Instead of using exact location as the primary identifier, Kyshik focuses on an animal's visual digital fingerprint.",
      "AI helps match new photos with existing observation history. This keeps animals visible in statistics while their exact location remains private.",
      "For the public, it is more important to see objective district- or city-level trends: changes over time, repeated observations, and growth patterns.",
    ],
  },
  {
    slug: "gamified-help",
    Icon: Gamepad2,
    category: "Gamification",
    date: "Future plan",
    title: "Missions: small tasks instead of one-time action",
    excerpt:
      "Small tasks help people contribute regularly and come back to meaningful support.",
    body: [
      "We turn counting into simple repeated actions: take a photo, confirm data, return for another observation, help the community.",
      "When participation is clear and easy, it stops being a rare impulse and becomes a habit people can sustain.",
      "Game-like missions should direct attention where help is needed, without exposing dangerous details or pushing risky behavior.",
    ],
  },
  {
    slug: "contribution-points",
    Icon: Trophy,
    category: "Gamification",
    date: "Future plan",
    title: "Contribution points: showing the value of every action",
    excerpt:
      "Verified photos, repeat observations, and useful system actions increase personal progress.",
    body: [
      "People return more often when they can see their impact. Contribution points make even small actions visible and meaningful.",
      "Verified photos, follow-up sightings, status updates, and helping other users can all become part of personal progress.",
      "This is not a competition for points on a map. It is a way to make care visible and support those who help consistently.",
    ],
  },
  {
    slug: "public-statistics",
    Icon: Database,
    category: "Data",
    date: "Future plan",
    title: "Objective public statistics",
    excerpt:
      "How protected observations can become evidence for city and district-level decisions.",
    body: [
      "When official numbers diverge from reality, stray animals become invisible to the system. Kyshik is designed to close that gap.",
      "The public receives not exact coordinates of each dog, but an aggregated view: where the issue is growing, where sterilization is needed, and where volunteer support is critical.",
      "In this way, data becomes a tool for change rather than a tool for surveillance.",
    ],
  },
];

const STATS_RU: Stat[] = [
  { value: "1", label: "фото", desc: "становится проверяемым цифровым фактом" },
  { value: "0", label: "координат", desc: "точная геопозиция не показывается публично" },
  { value: "0", label: "безнаказанности", desc: "исчезновение сложнее скрыть, когда есть данные" },
];

const STATS_EN: Stat[] = [
  { value: "1", label: "photo", desc: "becomes a verifiable digital fact" },
  { value: "0", label: "coordinates", desc: "exact geolocation is never shown publicly" },
  { value: "0", label: "impunity", desc: "disappearance is harder to hide when data exists" },
];

export const getBlogData = (language: Language) => {
  if (language === "en") {
    return {
      posts: POSTS_EN,
      stats: STATS_EN,
    };
  }

  return {
    posts: POSTS_RU,
    stats: STATS_RU,
  };
};
