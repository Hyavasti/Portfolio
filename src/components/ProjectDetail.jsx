import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  Link2,
} from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import TechPill from "./TechPill";

export default function ProjectDetail({ projectId, onSelectTab }) {
  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = PROJECTS[currentIndex];

  if (!project) return null;

  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <article className="py-10 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onSelectTab("projects")}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          02 / All Projects
        </button>

        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
          {project.badge}
        </span>
      </div>

      {/* Title & Summary */}
      <header className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-mono bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              Live Demo
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-mono bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity"
            >
              <GitBranch className="w-3.5 h-3.5" />
              Source Repository
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.apkUrl && (
            <a
              href={project.apkUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-mono border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download APK (Drive)
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {/* Cross-Link to Companion System (MWPC-Web <-> MWPCTracker) */}
          {project.pairedProject && (
            <button
              onClick={() =>
                onSelectTab(`project:${project.pairedProject.id}`)
              }
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-mono border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer"
            >
              <Link2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{project.pairedProject.label}:</span>
              <span className="font-semibold underline underline-offset-4">
                {project.pairedProject.title}
              </span>
            </button>
          )}
        </div>
      </header>

      {/* Problem Statement */}
      <section className="space-y-2">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          // Problem Context
        </h2>
        <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.problem}
        </div>
      </section>

      {/* Architecture & Implementation */}
      <section className="space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          // System Architecture & Implementation
        </h2>
        <ul className="space-y-2.5">
          {project.architecture.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              <span className="font-mono text-xs text-zinc-400 mt-1">
                0{index + 1}.
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          // Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>
      </section>

      {/* Prev / Next Project Footer */}
      <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
        {prevProject ? (
          <button
            onClick={() => onSelectTab(`project:${prevProject.id}`)}
            className="text-left group cursor-pointer"
          >
            <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Previous
            </div>
            <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover:underline mt-0.5">
              {prevProject.shortTitle || prevProject.title}
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextProject ? (
          <button
            onClick={() => onSelectTab(`project:${nextProject.id}`)}
            className="text-right group cursor-pointer"
          >
            <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-end gap-1">
              Next <ArrowRight className="w-3 h-3" />
            </div>
            <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover:underline mt-0.5">
              {nextProject.shortTitle || nextProject.title}
            </div>
          </button>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}