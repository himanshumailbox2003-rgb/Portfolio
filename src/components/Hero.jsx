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
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-400 mb-2">
          Portfolio
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          {hero.name}
        </h1>

        <p className="text-lg md:text-xl text-neutral-300">
          {hero.title}
        </p>

        <p className="text-sm text-neutral-400">
          {hero.summary}
        </p>

        {/* BUTTONS - BLACK THEME */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium border border-neutral-700 text-white hover:bg-neutral-900 transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 mr-1 mt-0.5" />
          <span>Open to Full Stack & AI roles</span>
        </div>

        <div className="flex gap-4 text-sm">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white underline-offset-4 hover:underline"
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
          <div className="absolute -inset-3 rounded-3xl bg-neutral-900 blur-2xl opacity-60" />

          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Snapshot
            </p>

            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <span className="font-medium">Location:</span> Jammu, India
              </li>
              <li>
                <span className="font-medium">Stack:</span> MERN, Python, ML
              </li>
              <li>
                <span className="font-medium">Focus:</span> Full Stack, AI & Analytics
              </li>
              <li>
                <span className="font-medium">Currently:</span> B.E. CSE student & Full Stack trainee
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
