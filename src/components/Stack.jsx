import { STACK_GROUPS } from "../data/portfolioData";

export default function Stack() {
  return (
    <section id="stack" className="py-12 border-b border-zinc-200 dark:border-zinc-800">
      <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
        02 — tech stack
      </h2>

      <div className="space-y-5">
        {STACK_GROUPS.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-mono rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}