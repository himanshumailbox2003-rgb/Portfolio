import { motion } from "framer-motion";
import { hero, socials } from "../data";

function Hero() {
  return (
    <section
      id="hero"
      className="section-padding flex flex-col md:flex-row items-center gap-10 md:gap-16"
    >
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {hero.name}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
          {hero.title}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {hero.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900 shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 mr-1 mt-0.5" />
          <span>Open to full stack & ML roles</span>
        </div>

        <div className="flex gap-4 text-sm">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex-1 w-full max-w-xs md:max-w-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-slate-200 via-slate-400/30 to-slate-900/70 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 blur-2xl opacity-60" />
          <div className="relative rounded-3xl border border-slate-200/70 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/80 p-6 shadow-soft">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400 mb-3">
              Snapshot
            </p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <span className="font-medium">Location:</span> Jammu, India
              </li>
              <li>
                <span className="font-medium">Stack:</span> MERN, Python, ML
              </li>
              <li>
                <span className="font-medium">Focus:</span> Full Stack, AI &
                Analytics
              </li>
              <li>
                <span className="font-medium">Currently:</span> B.E. CSE
                student & Full Stack trainee
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
