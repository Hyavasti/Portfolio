import { useState } from "react";
import { Cpu, Database, Layers, Sparkles } from "lucide-react";
import { PROJECTS, STACK_GROUPS } from "../data/portfolioData";
import TechPill from "./TechPill";
import FilterBar from "./FilterBar";

const STACK_FILTERS = [
  "All",
  ...STACK_GROUPS.map((group) => group.category),
];

const CATEGORY_META = {
  "Mobile & Frontend": {
    icon: Layers,
    subtitle: "Client interfaces, native Android UI & responsive web apps",
  },
  "Backend & Databases": {
    icon: Database,
    subtitle: "REST APIs, relational schemas, auth & realtime sync",
  },
  "Cloud, Tools & Hardware": {
    icon: Cpu,
    subtitle: "Deployment pipelines, third-party APIs & embedded systems",
  },
};

export default function Stack() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredGroups =
    activeFilter === "All"
      ? STACK_GROUPS
      : STACK_GROUPS.filter((group) => group.category === activeFilter);

  // Match clicked skill against your PROJECTS stack arrays
  const matchingProjects = selectedTech
    ? PROJECTS.filter((project) =>
        project.stack.some(
          (s) =>
            s.toLowerCase().includes(selectedTech.toLowerCase()) ||
            selectedTech.toLowerCase().includes(s.toLowerCase())
        )
      )
    : [];

  return (
    <section id="stack" className="py-10">
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            03 — tech stack
          </h2>
          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
            Click any skill to inspect usage
          </span>
        </div>

        <FilterBar
          filters={STACK_FILTERS}
          activeFilter={activeFilter}
          onChange={(filter) => {
            setActiveFilter(filter);
            setSelectedTech(null);
          }}
          items={STACK_GROUPS}
          categoryKey="category"
        />
      </div>

      {/* Interactive Usage Banner when a skill is clicked */}
      {selectedTech && (
        <div className="mb-5 p-3.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              {selectedTech}
            </span>
            <span className="text-zinc-500 dark:text-zinc-400">
              {matchingProjects.length > 0
                ? `— used in ${matchingProjects.map((p) => p.shortTitle).join(", ")}`
                : "— core toolkit & hardware stack"}
            </span>
          </div>

          <button
            onClick={() => setSelectedTech(null)}
            className="text-[11px] font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 self-start sm:self-auto cursor-pointer"
          >
            Clear
          </button>
        </div>
      )}

      {/* Full-Width Stacked Matrix */}
      <div className="space-y-4">
        {filteredGroups.map((group) => {
          const meta = CATEGORY_META[group.category] || {
            icon: Layers,
            subtitle: "Production tools & frameworks",
          };
          const IconComponent = meta.icon;

          return (
            <div
              key={group.category}
              className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3.5 mb-4 border-b border-zinc-100 dark:border-zinc-900">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400">
                    <IconComponent className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {group.category}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {meta.subtitle}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-zinc-400 self-start sm:self-center">
                  {group.items.length} tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => {
                  const isSelected = selectedTech === tech;

                  return (
                    <div
                      key={tech}
                      onClick={() =>
                        setSelectedTech(isSelected ? null : tech)
                      }
                      className={`rounded-md transition-all cursor-pointer ${
                        isSelected
                          ? "ring-2 ring-emerald-500 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950"
                          : ""
                      }`}
                    >
                      <TechPill tech={tech} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}