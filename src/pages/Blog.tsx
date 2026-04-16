import { motion } from "motion/react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Панажайдан асырап алудың маңызы",
    excerpt: "Неге дүкеннен сатып алуға өндіріс иттерін құтқарудың орнына асырап алу керек екенін түсін...",
    date: "2024 жылғы 15 сәуір",
    category: "Асырап алу",
  },
  {
    id: 2,
    title: "Бездомные собаки: проблема и решение",
    excerpt: "Шетінде ұзады қалған иттер өздеріне істеген қиындықтар және оларға қалай көмектесе алатындығы туралы...",
    date: "2024 жылғы 12 сәуір",
    category: "Жәрдем",
  },
  {
    id: 3,
    title: "Ит туралы интересті фактілер",
    excerpt: "Иттер туралы ғалымдарыңыз білмеген қызықты фактілер. Оларды оқып, құлықты төрт аяқты достарыңыз анықтасыз...",
    date: "2024 жылғы 10 сәуір",
    category: "Білім",
  },
  {
    id: 4,
    title: "Қазақстанда иттерді ұрлап алу мәселесі",
    excerpt: "Қалалық ортаңда іттерді сақтау және оларды қорғау туралы зерттеу...",
    date: "2024 жылғы 8 сәуір",
    category: "Жәрдем",
  },
  {
    id: 5,
    title: "Балалар және иттер: салауатты қарым-қатынас",
    excerpt: "Балалар ітпен болмасын өзарасын салауатты қарым-қатынас құруын үйренуі өте маңызды...",
    date: "2024 жылғы 5 сәуір",
    category: "Білім",
  },
  {
    id: 6,
    title: "Іт асыраушының міндеттері",
    excerpt: "Еврей дұрыс итін сақтау үшін не істеу керектігі және оңалған құрылымдар туралы...",
    date: "2024 жылғы 1 сәуір",
    category: "Білім",
  },
];

const BlogCard = ({
  title,
  excerpt,
  date,
  category,
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-card rounded-2xl p-8 border-2 border-black/70 hover:border-accent transition-all duration-300 shadow-[0_10px_0_rgba(0,0,0,0.25)] hover:shadow-[0_15px_0_rgba(0,0,0,0.35)] cursor-pointer group"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase px-3 py-1 rounded-full">
        {category}
      </span>
      <span className="text-secondary text-xs font-medium">{date}</span>
    </div>
    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-secondary text-sm leading-relaxed">{excerpt}</p>
  </motion.div>
);

export const Blog = () => (
  <div className="min-h-screen pt-24">
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="pointer-events-none absolute -left-12 top-20 w-44 h-44 rounded-full bg-accent/18 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-20 w-40 h-40 rounded-full bg-tg/20 blur-2xl" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-[3rem] md:text-[4rem] font-bold text-primary leading-tight mb-4">
            Біздің <span className="italic text-accent">Блог</span>
          </h1>
          <p className="text-secondary text-lg leading-relaxed max-w-2xl">
            Иттер туралы ақпараттар, іршілік пікірлер және қауым құрамды арада құйындатайтын оқу материалдары.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-[linear-gradient(160deg,#171717_0%,#0f0f0f_64%,#050505_100%)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Жаңа мәтін орналасыппы?
          </h2>
          <p className="text-white/60 text-base mb-8">
            Барлық жаңа блог жазбалары туралы хабарландырылуды алыңыз.
          </p>
          <motion.a
            href="https://t.me/kyshikbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Белгі салу
          </motion.a>
        </motion.div>
      </div>
    </section>
  </div>
);
