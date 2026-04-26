import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Database,
  FileText,
  Gamepad2,
  HeartPulse,
  Link2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

type IconType = typeof Database;

type Slide = {
  eyebrow: string;
  title: string;
  body?: string;
  bullets?: string[];
  Icon: IconType;
  accent?: string;
};

const slides: Slide[] = [
  {
    eyebrow: "01 / Kyshik in One Slide",
    title: "Verified digital passports for animals.",
    body: "We build animal records that insurers and clinics pay to access. Data comes from a game-like app that turns sightings into rich, longitudinal records.",
    bullets: [
      "Start with lost, stray, and undocumented animals",
      "One passport, continuously enriched",
      "Monetized across multiple enterprise customers",
    ],
    Icon: Sparkles,
    accent: "Lost animals -> verified passports -> enterprise revenue",
  },
  {
    eyebrow: "02 / The Problem",
    title: "Animal data is broken when it matters most.",
    bullets: [
      "Stray and lost animals have no digital history",
      "Microchips require a scanner and carry no visual record",
      "Evidence is trapped in phones, chats, and spreadsheets",
      "Result: slow intake, poor care, insurance blind spots",
    ],
    Icon: HeartPulse,
  },
  {
    eyebrow: "03 / Where Kyshik Wins",
    title: "We win where chips fail.",
    body: "Microchips identify only after scanning. Kyshik passports work from a phone and grow into a living visual record.",
    Icon: ShieldCheck,
  },
  {
    eyebrow: "04 / The Digital Passport",
    title: "One record. Continuously enriched.",
    bullets: [
      "Visual ID and photos over time",
      "Condition changes, wounds, and recovery",
      "Rescue, shelter, and owner context",
      "API-accessible structured data",
    ],
    Icon: FileText,
    accent: "First sighting opens it. Every return makes it more valuable.",
  },
  {
    eyebrow: "05 / How It Works",
    title: "From street sighting to enterprise API.",
    bullets: [
      "Users spot animals through a game-like app",
      "Photos and context auto-create a passport",
      "Same animal again is linked, not duplicated",
      "Repeat sightings build longitudinal history",
      "Animal enters care and the passport travels with it",
      "Insurers and clinics access data via API contracts",
    ],
    Icon: Gamepad2,
  },
  {
    eyebrow: "06 / Insurer Value",
    title: "Unknown animal -> insurable digital entity.",
    body: "Before Kyshik: no baseline, blind underwriting. With Kyshik, insurers get a verified starting state, timestamped evidence, and an ongoing record.",
    bullets: [
      "Cleaner policies",
      "Faster claims",
      "Preventive engagement",
    ],
    Icon: BadgeCheck,
  },
  {
    eyebrow: "07 / Clinic Value",
    title: "Better records -> faster workflows -> stronger care.",
    body: "Before Kyshik: incomplete intake and fragmented history. With Kyshik, clinics get prior photos, timestamps, condition changes, and continuity across shelters, adopters, and owners.",
    Icon: Stethoscope,
  },
  {
    eyebrow: "08 / Business Model",
    title: "Enterprise contracts plus usage-based data access.",
    body: "Target: 10 insurers + 20 clinics = $2.3M ARR. Every customer grows both revenue and data depth.",
    Icon: TrendingUp,
  },
  {
    eyebrow: "09 / The Data Engine",
    title: "More use -> better data -> more customers.",
    bullets: [
      "Streaks, collections, and local competition drive engagement",
      "We reward better photos, verifications, and longitudinal tracking",
      "Dense local coverage for animals institutions miss",
    ],
    Icon: Database,
  },
  {
    eyebrow: "10 / Built to Integrate",
    title: "Infrastructure layer, not another standalone app.",
    body: "APIs plug into existing clinic and insurer systems. No rip-and-replace. Passport data flows into intake, claims, and records where decisions happen.",
    Icon: Link2,
  },
  {
    eyebrow: "11 / Where This Goes",
    title: "A system of record for animals entering care.",
    bullets: [
      "Claims automation",
      "Risk scoring",
      "Provider integrations",
      "Population analytics",
    ],
    Icon: Building2,
  },
  {
    eyebrow: "12 / Our Edge",
    title: "Defensibility grows with every passport.",
    bullets: [
      "Start before ownership and before formal records",
      "Data from engagement, not volunteer labor",
      "Phone-based, no hardware deployment",
      "Passports improve with time",
    ],
    Icon: ShieldCheck,
  },
  {
    eyebrow: "13 / Team",
    title: "Startup grit x research depth x clinical truth.",
    bullets: [
      "Niyaz Muslim — Biz Dev, Verrafied.AI (NVIDIA Inception). Commercial + execution.",
      "Abylay Dospayev — Biz Dev, Verrafied.AI + Research Assistant, WSU. Product + data vision.",
      "Vlada — Veterinary clinic frontline. Workflow + intake reality.",
    ],
    Icon: BadgeCheck,
  },
  {
    eyebrow: "14 / Closing",
    title: "The data layer animal care has been missing.",
    body: "Lost animals become verified passports. More animals seen means a more valuable network and more revenue lines.",
    Icon: Sparkles,
    accent: "Lost animals -> verified passports -> enterprise revenue",
  },
];

const comparison = [
  ["Microchip", "Kyshik Passport"],
  ["Needs scanner", "Works from phone"],
  ["Identifier only", "Living visual record"],
  ["Static", "Grows over time"],
  ["Owned pets", "Strays, rescues, undocumented"],
];

const modelRows = [
  ["Contract", "$20K-$100K ARR", "$50K-$250K ARR"],
  ["Setup", "$10K-$40K", "$25K-$75K"],
  ["Usage", "Per intake/event", "Per passport/API call"],
];

const SlideCard = ({ slide, index }: { slide: Slide; index: number }) => {
  const Icon = slide.Icon;
  const isComparison = index === 2;
  const isBusinessModel = index === 7;

  return (
    <motion.section
      id={`slide-${index + 1}`}
      className="min-h-[calc(100svh-4rem)] border-b border-white/10 bg-primary px-5 py-14 text-white sm:px-8 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-accent">
            {slide.eyebrow}
          </p>
          <h2 className="mt-6 text-[2.65rem] font-extrabold leading-[0.92] sm:text-[4.8rem]">
            {slide.title}
          </h2>
          {slide.body && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {slide.body}
            </p>
          )}
        </div>

        <div className="self-center">
          <div className="rounded-lg border-2 border-white/18 bg-white/7 p-6 shadow-[0_10px_0_rgba(255,255,255,0.08)] sm:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent text-white">
                <Icon className="h-7 w-7" />
              </div>
              <span className="text-sm font-extrabold text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {isComparison && (
              <div className="overflow-hidden rounded-lg border border-white/14">
                {comparison.map(([left, right], rowIndex) => (
                  <div
                    key={left}
                    className={`grid grid-cols-2 ${rowIndex === 0 ? "bg-white/12 text-white" : "bg-white/5 text-white/72"}`}
                  >
                    <div className="border-r border-white/14 px-4 py-4 text-sm font-extrabold sm:text-base">
                      {left}
                    </div>
                    <div className="px-4 py-4 text-sm font-extrabold sm:text-base">
                      {right}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isBusinessModel && (
              <div className="overflow-hidden rounded-lg border border-white/14">
                <div className="grid grid-cols-3 bg-white/12 text-sm font-extrabold text-white">
                  <div className="px-4 py-4">Phase</div>
                  <div className="px-4 py-4">Clinics</div>
                  <div className="px-4 py-4">Insurers</div>
                </div>
                {modelRows.map(([label, clinics, insurers]) => (
                  <div key={label} className="grid grid-cols-3 bg-white/5 text-sm font-bold text-white/72">
                    <div className="border-t border-white/14 px-4 py-4 text-white">{label}</div>
                    <div className="border-t border-white/14 px-4 py-4">{clinics}</div>
                    <div className="border-t border-white/14 px-4 py-4">{insurers}</div>
                  </div>
                ))}
              </div>
            )}

            {!isComparison && !isBusinessModel && slide.bullets && (
              <ul className="space-y-4">
                {slide.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-7 text-white/76 sm:text-lg">
                    <ArrowRight className="mt-1 h-5 w-5 flex-none text-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {slide.accent && (
              <div className="mt-8 rounded-lg border border-accent/40 bg-accent/12 p-5 text-base font-extrabold leading-7 text-white">
                {slide.accent}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const PitchDeck = () => {
  return (
    <div className="bg-primary">
      <section className="relative overflow-hidden bg-primary px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-14 bg-[repeating-linear-gradient(-18deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-accent">
            Kyshik investor pitch
          </p>
          <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="text-[3rem] font-extrabold leading-[0.9] sm:text-[6rem]">
              The data layer animal care has been missing.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Verified digital passports for lost, stray, rescued, and undocumented animals. Built from engagement, enriched over time, and sold into clinics and insurers through API contracts.
            </p>
          </div>
        </div>
      </section>

      {slides.map((slide, index) => (
        <SlideCard key={slide.eyebrow} slide={slide} index={index} />
      ))}
    </div>
  );
};
