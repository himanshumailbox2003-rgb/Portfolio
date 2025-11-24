import { motion } from "framer-motion";
import { experience, education } from "../data";

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-subtitle">Experience</p>
          <h2 className="section-title">What I&apos;ve worked on</h2>
          <div className="mt-4 space-y-6">
            {experience.map((role) => (
              <article
                key={role.company}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 md:p-6 shadow-sm"
              >
                <header className="mb-3">
                  <h3 className="font-semibold text-base md:text-lg tracking-tight">
                    {role.role}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {role.company} · {role.location}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {role.period}
                  </p>
                </header>
                <ul className="list-disc pl-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {role.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:sticky md:top-28"
        >
          <p className="section-subtitle">Education</p>
          <h2 className="section-title">Where I studied</h2>
          <div className="mt-4 space-y-4">
            {education.map((item) => (
              <article
                key={item.degree}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-4 md:p-5 text-sm shadow-sm"
              >
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                  {item.degree}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {item.school}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.location}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {item.period}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
