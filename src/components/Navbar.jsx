import { navLinks } from "../data";
import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur-md bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-200/70 dark:border-slate-800/70">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-semibold tracking-tight text-lg"
        >
          HT<span className="text-slate-500 dark:text-slate-400">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 shadow-sm hover:shadow transition-all"
          >
            {theme === "dark" ? (
              <HiOutlineSun className="h-4 w-4" />
            ) : (
              <HiOutlineMoon className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
