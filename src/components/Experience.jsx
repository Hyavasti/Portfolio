import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience({ onSelectProject }) {
  return (
    <section id="experience" className="py-10">
      <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
        04 — experience & engineering milestones
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
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.role}
                </h3>

                {item.projectId && onSelectProject && (
                  <button
                    onClick={() => onSelectProject(item.projectId)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 cursor-pointer"
                  >
                    <span>View Specs</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>

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