export default function TechPill({ tech }) {
  return (
    <span className="group/pill relative inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_4px_14px_-4px_rgba(16,185,129,0.2)] cursor-default select-none">
      {/* Live Status Dot that illuminates on hover */}
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-all duration-200 group-hover/pill:bg-emerald-500 group-hover/pill:scale-110 group-hover/pill:shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
      <span>{tech}</span>
    </span>
  );
}