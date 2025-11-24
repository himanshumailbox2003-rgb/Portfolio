import { motion } from "framer-motion";
import { projects } from "../data";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-subtitle">Projects</p>
          <h2 className="section-title">Things I&apos;ve built</h2>
        </div>
        <p className="hidden md:block text-xs text-slate-500 dark:text-slate-400 max-w-xs text-right">
          Each project is built with a focus on real-world workflows, clean
          APIs, and polished UI/UX.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-5 md:p-6 hover:-translate-y-1 transition-all"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <header className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-base md:text-lg tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {project.period}
                </p>
              </div>
            </header>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-700 dark:text-slate-200 underline-offset-4 hover:underline"
              >
                View Live
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
