import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-xs font-mono text-zinc-500 dark:text-zinc-400">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} {PROFILE.name} ({PROFILE.handle})
        </span>
        <span>Built with React, Vite & Tailwind CSS</span>
      </div>
    </footer>
  );
}