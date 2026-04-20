import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import abylayWeb from "../../abylay.webp";
import niyazCroppedWeb from "../../niyaz.webp";
import vladaSoloWeb from "../../vlada.webp";

export const Crew = () => {
  const { language } = useLanguage();
  const t =
    language === "en"
      ? {
          tag: "Crew",
          title: "The people behind Kyshik",
          desc: "We are building the first independent AI platform for counting stray animals in Kazakhstan.",
        }
      : {
          tag: "Crew",
          title: "Люди за Kyshik",
          desc: "Мы строим первую независимую ИИ-платформу для учета бездомных животных в Казахстане.",
        };

  return (
    <div className="min-h-screen bg-primary text-white">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-14 bg-[repeating-linear-gradient(-18deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
          <motion.div
            className="mb-10 max-w-4xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55 mb-5">
              {t.tag}
            </p>
            <h1 className="text-[3rem] md:text-[5.4rem] font-extrabold leading-[0.92]">
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-white/68">
              {t.desc}
            </p>
          </motion.div>

        <div className="mt-8 grid w-full max-w-[820px] grid-cols-2 items-start gap-3 sm:grid-cols-3 sm:gap-4">
          <motion.figure
            className="w-full self-start rounded-2xl border-2 border-white/35 bg-white/95 p-2 shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            <img
              src={niyazCroppedWeb}
              alt="Niyaz M"
              className="block aspect-square w-full rounded-xl object-cover"
              loading="lazy"
            />
            <figcaption className="pt-2 text-center text-xs sm:text-sm font-semibold tracking-wide text-primary">
              Niyaz M.
            </figcaption>
          </motion.figure>

          <motion.figure
            className="w-full self-start rounded-2xl border-2 border-white/35 bg-white/95 p-2 shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <img
              src={vladaSoloWeb}
              alt="Vlada"
              className="block aspect-square w-full rounded-xl object-cover object-[32%_50%]"
              loading="lazy"
            />
            <figcaption className="pt-2 text-center text-xs sm:text-sm font-semibold tracking-wide text-primary">
              Vlada
            </figcaption>
          </motion.figure>

          <motion.figure
            className="w-full self-start rounded-2xl border-2 border-white/35 bg-white/95 p-2 shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
          >
            <img
              src={abylayWeb}
              alt="Abylay D"
              className="block aspect-square w-full rounded-xl object-cover"
              loading="lazy"
            />
            <figcaption className="pt-2 text-center text-xs sm:text-sm font-semibold tracking-wide text-primary">
              Abylay D.
            </figcaption>
          </motion.figure>
        </div>
        </div>
      </section>
    </div>
  );
};
