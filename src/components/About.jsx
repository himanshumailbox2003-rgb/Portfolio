import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 max-w-3xl"
      >
        <p className="section-subtitle">About</p>
        <h2 className="section-title">Who I am</h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          I&apos;m a Computer Science engineering student and full stack
          developer who enjoys turning ideas into fast, clean, and reliable web
          applications. I work across the stack with React, Node.js, and modern
          tooling, and I also explore data, analytics, and machine learning with
          Python.
        </p>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Recently, I&apos;ve built a training &amp; placement portal, an
          AI-powered analytics dashboard, and this portfolio you&apos;re
          currently viewing. I focus on clean architecture, reusable UI
          components, and a smooth developer experience so projects are easy to
          extend and deploy.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
