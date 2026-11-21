import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-12 border-b border-zinc-200 dark:border-zinc-800">
      <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
        03 — education & engineering background
      </h2>

      <div className="space-y-6">
        {EXPERIENCE.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4"
          >
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-0.5">
              {item.period}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.role}
              </h3>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                {item.org}
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}