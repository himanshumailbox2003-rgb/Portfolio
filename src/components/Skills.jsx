import { motion } from "framer-motion";
import { skills } from "../data";

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 md:p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="section-subtitle">Skills</p>
        <h2 className="section-title">Tech I work with</h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
          I&apos;m comfortable taking a feature from idea to deployment — from
          designing the API and data model to building responsive UIs and
          wiring up analytics.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-5 md:gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frontend" items={skills.frontend} />
        <SkillGroup title="Backend & Databases" items={skills.backend} />
        <SkillGroup title="AI / ML & Data" items={skills.ml} />
        <SkillGroup title="Tools & Platforms" items={skills.tools} />
      </motion.div>
    </section>
  );
}

export default Skills;
