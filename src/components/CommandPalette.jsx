import { useState } from "react";
import { Search, X } from "lucide-react";
import { PROFILE, PROJECTS } from "../data/portfolioData";

const PRESET_QUESTIONS = [
  {
    q: "When is Jose available for OJT?",
    a: "Mid-January 2027 (2nd Semester, BSIT at STI College Las Piñas). Open to roles in Batangas, Las Piñas, or remote/hybrid setups.",
  },
  {
    q: "What is his strongest real-world project?",
    a: "Maupay Waraynon Padala Center (MWPC) — a full-stack logistics system combining a Node/Express web dashboard, a native Kotlin/Jetpack Compose Android driver app, Firebase Realtime GPS, Supabase PostgreSQL, and PayMongo.",
  },
  {
    q: "What languages and frameworks does he use?",
    a: "Kotlin, Jetpack Compose, React, Vite, JavaScript, Node.js, Express.js, Python, PostgreSQL (Supabase/Neon), Firebase, and C++ for Arduino robotics.",
  },
];

export default function CommandPalette({ isOpen, onClose, onSelectProject }) {
  const [query, setQuery] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-4 h-4 text-zinc-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedAnswer(null);
            }}
            placeholder="Search projects, tech stack, or pick a question..."
            className="w-full px-3 py-3 text-sm bg-transparent text-zinc-900 dark:text-zinc-100 focus:outline-none"
          />
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3 max-h-80 overflow-y-auto space-y-4 text-sm">
          {selectedAnswer && (
            <div className="p-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="text-xs font-mono text-zinc-500 mb-1">{selectedAnswer.q}</div>
              <div className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                {selectedAnswer.a}
              </div>
            </div>
          )}

          <div>
            <div className="px-2 text-[11px] font-mono uppercase text-zinc-400 mb-1">
              Quick Recruiter Q&A
            </div>
            {PRESET_QUESTIONS.map((item) => (
              <button
                key={item.q}
                onClick={() => setSelectedAnswer(item)}
                className="w-full text-left px-2 py-1.5 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {item.q}
              </button>
            ))}
          </div>

          <div>
            <div className="px-2 text-[11px] font-mono uppercase text-zinc-400 mb-1">
              Jump to Project
            </div>
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  onSelectProject(project);
                  onClose();
                }}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <span>{project.title}</span>
                <span className="text-xs font-mono text-zinc-400">{project.category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-[11px] font-mono text-zinc-400">
          <span>{PROFILE.name}</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}