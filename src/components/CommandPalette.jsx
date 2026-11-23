import { useState } from "react";
import { ArrowRight, FolderGit2, Search, X } from "lucide-react";
import { PROFILE, PROJECTS } from "../data/portfolioData";

const PRESET_QUESTIONS = [
  {
    q: "When is Jose available for OJT?",
    a: "Mid-January 2027 (2nd Semester, BSIT at STI College Las Piñas). Open to roles in Batangas, Las Piñas, or remote/hybrid setups.",
  },
  {
    q: "What is his strongest real-world project?",
    a: "Maupay Waraynon Padala Center (MWPC) — a dual-client logistics system combining MWPC-Web (Node/Express dashboard) and MWPCTracker (native Kotlin/Jetpack Compose Android driver app) with Firebase Realtime GPS, Supabase PostgreSQL, and PayMongo.",
  },
  {
    q: "What languages and frameworks does he use?",
    a: "Kotlin, Jetpack Compose, React, Vite, JavaScript, Node.js, Express.js, Python, PostgreSQL (Supabase/Neon), Firebase, and C++ for Arduino robotics.",
  },
];

const NAV_SECTIONS = [
  { id: "overview", num: "01", label: "Overview (Full Page)" },
  { id: "projects", num: "02", label: "All Projects" },
  { id: "stack", num: "03", label: "Tech Stack" },
  { id: "experience", num: "04", label: "Experience & Education" },
  { id: "certificates", num: "05", label: "Certifications & Credentials" },
  { id: "contact", num: "06", label: "Contact & OJT Inquiry" },
];

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
  onSelectTab,
}) {
  const [query, setQuery] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredSections = NAV_SECTIONS.filter(
    (s) =>
      s.label.toLowerCase().includes(q) || s.num.toLowerCase().includes(q)
  );

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      (p.shortTitle && p.shortTitle.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q))
  );

  const filteredQuestions = PRESET_QUESTIONS.filter(
    (item) =>
      item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
  );

  const handleClose = () => {
    setQuery("");
    setSelectedAnswer(null);
    onClose();
  };

  const handleJumpSection = (tabId) => {
    onSelectTab?.(tabId);
    handleClose();
  };

  const handleJumpProject = (project) => {
    if (onSelectTab) {
      onSelectTab(`project:${project.id}`);
    } else {
      onSelectProject?.(project);
    }
    handleClose();
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-4 bg-black/60 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedAnswer(null);
            }}
            placeholder="Jump to section, project, tech stack, or ask..."
            className="w-full px-3 py-3 text-sm bg-transparent text-zinc-900 dark:text-zinc-100 focus:outline-none"
          />
          <button
            onClick={handleClose}
            aria-label="Close command palette"
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3 max-h-80 overflow-y-auto space-y-4 text-sm">
          {selectedAnswer && (
            <div className="p-3 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="text-xs font-mono text-zinc-500 mb-1">
                {selectedAnswer.q}
              </div>
              <div className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                {selectedAnswer.a}
              </div>
            </div>
          )}

          {filteredQuestions.length > 0 && (
            <div>
              <div className="px-2 text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Quick Recruiter Q&A
              </div>
              {filteredQuestions.map((item) => (
                <button
                  key={item.q}
                  onClick={() => setSelectedAnswer(item)}
                  className="w-full text-left px-2 py-1.5 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                >
                  {item.q}
                </button>
              ))}
            </div>
          )}

          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Jump to Project
              </div>
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleJumpProject(project)}
                  className="w-full flex items-center justify-between gap-2 px-2 py-1.5 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2 truncate">
                    <FolderGit2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="truncate">{project.title}</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-400 shrink-0">
                    {project.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {filteredSections.length > 0 && (
            <div>
              <div className="px-2 text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Navigate Sections
              </div>
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleJumpSection(section.id)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">
                      {section.num}
                    </span>
                    <span>{section.label}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              ))}
            </div>
          )}

          {filteredQuestions.length === 0 &&
            filteredProjects.length === 0 &&
            filteredSections.length === 0 && (
              <div className="py-6 text-center text-xs font-mono text-zinc-400">
                No matching sections, projects, or answers for "{query}"
              </div>
            )}
        </div>

        <div className="px-4 py-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-[11px] font-mono text-zinc-400">
          <span>{PROFILE.name}</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}