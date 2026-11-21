import { Sun, Moon, Command } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode, onOpenCommand }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
        <a href="#" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Hyavasti<span className="text-zinc-400 font-normal">.dev</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-zinc-500 dark:text-zinc-400">
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#stack" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Stack
          </a>
          <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Background
          </a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            title="Open Command Palette"
          >
            <Command className="w-3 h-3" />
            <span>Ask</span>
            <kbd className="text-[10px] text-zinc-400 ml-1">Alt+K</kbd>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}