import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:himanshumailbox2003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        <p className="section-subtitle">Contact</p>
        <h2 className="section-title">Let&apos;s build something</h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6">
          Have an opportunity, project idea, or just want to say hi? Drop a
          message and I&apos;ll get back as soon as I can.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 md:p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm outline-none ring-0 focus:border-slate-400 dark:focus:border-slate-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm outline-none ring-0 focus:border-slate-400 dark:focus:border-slate-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm outline-none ring-0 focus:border-slate-400 dark:focus:border-slate-500 resize-none"
              placeholder="Tell me a bit about what you have in mind..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900 shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Send Message
          </button>

          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            This form uses your default email client via{" "}
            <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-[10px]">
              mailto:
            </code>{" "}
            so you can quickly send a message without any backend.
          </p>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
