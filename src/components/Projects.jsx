import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";

const FILTERS = ["All", "Full-Stack + Android", "Android", "Full-Stack", "Automation"];

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          01 — selected projects
        </h2>

        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeFilter === filter
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-950 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 mb-2">
                  {project.badge}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4">
                  {project.title}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 shrink-0">
                Specs <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}