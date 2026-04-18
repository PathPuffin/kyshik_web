import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { getBlogData } from "./blogData";

export const BlogPost = () => {
  const { language } = useLanguage();
  const { slug } = useParams();
  const { posts } = getBlogData(language);
  const post = posts.find((item) => item.slug === slug);

  const t =
    language === "en"
      ? {
          notFoundTag: "Article not found",
          notFoundTitle: "This post has not been published yet",
          backToBlog: "Back to blog",
          backInArticle: "Back",
        }
      : {
          notFoundTag: "Статья не найдена",
          notFoundTitle: "Такой материал еще не опубликован",
          backToBlog: "Вернуться в блог",
          backInArticle: "Назад в блог",
        };

  if (!post) {
    return (
      <div className="min-h-screen bg-primary text-white">
        <section className="max-w-4xl mx-auto px-5 sm:px-6 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
            {t.notFoundTag}
          </p>
          <h1 className="text-[2.6rem] md:text-[4rem] font-extrabold leading-[0.95]">
            {t.notFoundTitle}
          </h1>
          <Link to="/blog" className="mt-8 inline-flex text-sm font-extrabold uppercase tracking-[0.2em] text-accent">
            {t.backToBlog}
          </Link>
        </section>
      </div>
    );
  }

  const { Icon } = post;

  return (
    <div className="min-h-screen bg-primary text-white">
      <article className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-14 bg-[repeating-linear-gradient(-18deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)]" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
              {t.backInArticle}
            </Link>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/18">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                {post.category} / {post.date}
              </p>
            </div>

            <h1 className="mt-8 text-[2.7rem] md:text-[5rem] font-extrabold leading-[0.92]">
              {post.title}
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/68">{post.excerpt}</p>
          </motion.div>

          <motion.div
            className="mt-12 border-t-2 border-white/18 pt-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {post.body.map((paragraph) => (
              <p key={paragraph} className="mb-7 text-base sm:text-lg leading-8 text-white/76">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </article>
    </div>
  );
};
