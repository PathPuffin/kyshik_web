import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import abylayWeb from "../../abylay.webp";
import niyazWeb from "../../niyaz.webp";
import usWeb from "../../us.webp";
import vladaWeb from "../../vlada.webp";

type Member = {
  name: string;
  role?: string;
  quote?: string;
  image: string;
  imageClass?: string;
};

export const Crew = () => {
  const { language } = useLanguage();
  const t =
    language === "en"
      ? {
          tag: "Crew",
          title: "The people behind Kyshik",
          desc: "We are building the first independent AI platform for counting stray animals in Kazakhstan.",
          cofounder: "Co-founder",
          product: "Product & community",
        }
      : {
          tag: "Crew",
          title: "Люди за Kyshik",
          desc: "Мы строим первую независимую ИИ-платформу для учета бездомных животных в Казахстане.",
          cofounder: "Co-founder",
          product: "Продукт и сообщество",
        };

  const members: Member[] = [
    {
      name: "Niyaz M.",
      role: t.cofounder,
      quote: "У бездомных животных тоже есть имя",
      image: niyazWeb,
    },
    {
      name: "Abylay D.",
      role: t.cofounder,
      quote: "let's save some dawgs",
      image: abylayWeb,
    },
    {
      name: "Vlada L.",
      image: vladaWeb,
      imageClass: "object-[32%_50%]",
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-14 bg-[repeating-linear-gradient(-18deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
          <motion.div
            className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55 mb-5">
                {t.tag}
              </p>
              <h1 className="text-[3rem] md:text-[5.4rem] font-extrabold leading-[0.92]">
                {t.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-white/68">
                {t.desc}
              </p>
            </div>

            <figure className="overflow-hidden rounded-lg border-2 border-white/18 bg-white/8 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.32)]">
              <img
                src={usWeb}
                alt="Kyshik founding crew"
                className="block aspect-[4/3] w-full rounded-md object-cover"
                loading="eager"
              />
            </figure>
          </motion.div>

          <div className="mt-12 grid w-full grid-cols-1 items-start gap-4 sm:grid-cols-3">
            {members.map((member, index) => (
              <motion.figure
                key={member.name}
                className="w-full self-start rounded-lg border-2 border-white/24 bg-white/95 p-2 shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`block aspect-square w-full rounded-md object-cover ${member.imageClass || ""}`}
                  loading="lazy"
                />
                <figcaption className="px-2 py-3 text-center">
                  <p className="text-base font-extrabold tracking-wide text-primary">{member.name}</p>
                  {member.role && (
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-accent">{member.role}</p>
                  )}
                  {member.quote && (
                    <p className="mt-2 text-xs font-medium leading-5 text-primary/75">{member.quote}</p>
                  )}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
