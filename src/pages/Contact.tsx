import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "f117ad90-c89c-4844-b9ce-3dae5a63b2de";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const inputClass =
    "w-full rounded-lg border-2 border-black/25 bg-white px-4 py-3 text-sm text-primary placeholder:text-secondary/50 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("message", form.message);
      payload.append("company", form.company);
      payload.append("subject", `New contact from ${form.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit form.");
      }

      setSent(true);
      setForm({ name: "", company: "", email: "", message: "" });
    } catch {
      window.alert("Could not send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100svh-4rem)] bg-[#f8f8f5] py-20 sm:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-18 bg-[repeating-linear-gradient(-18deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)_1px,transparent_1px,transparent_8px)]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
            Контакт
          </p>
          <h1 className="text-[2.45rem] md:text-[4.25rem] font-bold text-primary leading-[0.98]">
            Подключиться к Kyshik
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-secondary">
            Напиши нам, если хочешь помочь с пилотом, партнерством или данными по бездомным животным.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] overflow-hidden rounded-lg border-2 border-black/70 bg-white shadow-[0_10px_0_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <div className="bg-primary p-8 sm:p-10 lg:p-14 text-white flex flex-col justify-between gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55 mb-5">
                Байланыс
              </p>
              <h2 className="text-[2.1rem] md:text-[3.1rem] font-bold leading-[0.98]">
                Начнем разговор
              </h2>
              <p className="text-white/70 text-base leading-7 mt-5 max-w-md">
                Мы открыты к пилотам, волонтерам, партнерам и людям, которые хотят сделать учет животных честнее.
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                Казахстан
              </p>
              <p className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-accent" />
                Без публичных точных координат
              </p>
              <p className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-accent" />
                @kyshikbot
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12 flex items-center">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full"
              >
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Сообщение отправлено</h3>
                <p className="text-secondary font-light text-sm">
                  Спасибо. Мы свяжемся с тобой в ближайшее время.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-primary mb-1">Расскажи, чем хочешь помочь</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-bold">Имя *</label>
                    <input
                      type="text"
                      placeholder="Нияз"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-bold">Организация</label>
                    <input
                      type="text"
                      placeholder="Kyshik"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-secondary font-bold">Email *</label>
                  <input
                    type="email"
                    placeholder="salem@kyshik.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-secondary font-bold">Сообщение *</label>
                  <textarea
                    placeholder="Хочу обсудить пилот в городе..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-on-primary py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Отправляем..." : "Отправить"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
