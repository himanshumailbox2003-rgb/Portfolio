function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 py-6 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} Himanshu Tandon. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          <span>Built with React, Vite &amp; Tailwind CSS.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
