import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { POSTS, STATS } from "./blogData";

const featured = POSTS[0];
const restPosts = POSTS.slice(1);

export const Blog = () => (
  <div className="min-h-screen bg-primary text-white">
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-14 bg-[repeating-linear-gradient(-18deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55 mb-5">
              Блог
            </p>
            <h1 className="text-[3.1rem] md:text-[5.6rem] font-extrabold leading-[0.9] tracking-normal">
              Будущие планы и заметки Kyshik
            </h1>
          </div>
          <p className="max-w-xl text-base sm:text-lg leading-8 text-white/68 lg:ml-auto">
            Пишем о приватности, этичном ИИ, безопасном учете и том, как сделать помощь животным регулярной привычкой.
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <Link
            to={`/blog/${featured.slug}`}
            className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 rounded-lg border-2 border-white/18 bg-white/6 p-6 sm:p-8 shadow-[0_8px_0_rgba(255,255,255,0.08)] transition-colors hover:border-accent"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
                Главная статья
              </p>
              <h2 className="mt-5 text-[2.1rem] md:text-[3.35rem] font-extrabold leading-[0.96]">
                {featured.title}
              </h2>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                {featured.category} / {featured.date}
              </p>
              <p className="mt-5 text-base sm:text-lg leading-8 text-white/68">{featured.excerpt}</p>
              <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.2em] text-accent">
                Читать статью
              </p>
            </div>
          </Link>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {restPosts.map(({ Icon, slug, category, date, title, excerpt }, index) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 + index * 0.08, duration: 0.55 }}
            >
              <Link
                to={`/blog/${slug}`}
                className="flex min-h-82 flex-col rounded-lg border-2 border-white/18 bg-white/6 p-6 sm:p-7 shadow-[0_8px_0_rgba(255,255,255,0.08)] transition-colors hover:border-accent"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/18">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                    {category}
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">{date}</p>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{excerpt}</p>
                <p className="mt-auto pt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                  Читать
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 border-y-2 border-white/18 py-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.28em] text-white/55">
            Принципы, которые сохраняем
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-accent">{stat.label}</p>
                <p className="mt-3 text-sm leading-6 text-white/68">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);
