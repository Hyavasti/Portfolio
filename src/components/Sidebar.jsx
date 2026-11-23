import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Command,
  Menu,
  Moon,
  Sun,
  X,
  FolderGit2,
} from "lucide-react";
import { PROFILE, PROJECTS } from "../data/portfolioData";

const MAIN_TABS = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "projects", num: "02", label: "Projects", hasChildren: true },
  { id: "stack", num: "03", label: "Tech Stack" },
  { id: "experience", num: "04", label: "Experience" },
  { id: "certificates", num: "05", label: "Certificates" },
  { id: "contact", num: "06", label: "Contact" },
];

export default function Sidebar({
  activeTab,
  onSelectTab,
  darkMode,
  setDarkMode,
  onOpenCommand,
}) {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (tabId) => {
    onSelectTab(tabId);
    if (tabId.startsWith("project:")) {
      setProjectsOpen(true);
    }
    setMobileOpen(false);
  };

  const isProjectActive =
    activeTab === "projects" || activeTab.startsWith("project:");

  const SidebarContent = () => (
    <div className="flex flex-col h-full justify-between p-5 select-none">
      <div>
        {/* Identity Header */}
        <div className="pb-5 border-b border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => handleNavigate("overview")}
            className="text-left group"
          >
            <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4">
              {PROFILE.name}
            </div>
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              @{PROFILE.handle}
            </div>
          </button>

          <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            OJT · Jan 2027
          </div>
        </div>

        {/* Alt + K Quick Search */}
        <button
          onClick={() => {
            setMobileOpen(false);
            onOpenCommand();
          }}
          className="mt-4 w-full flex items-center justify-between px-3 py-2 text-xs font-mono rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Command className="w-3.5 h-3.5" />
            Quick ask / jump...
          </span>
          <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            Alt+K
          </kbd>
        </button>

        {/* Navigation Tree */}
        <nav className="mt-6 space-y-1">
          {MAIN_TABS.map((tab) => {
            if (!tab.hasChildren) {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleNavigate(tab.id)}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-xs font-mono transition-colors ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  <span className="opacity-60">{tab.num}</span>
                  <span>{tab.label}</span>
                </button>
              );
            }

            // Expandable Projects Tab + Sub-tabs
            return (
              <div key={tab.id} className="space-y-1">
                <div
                  className={`flex items-center justify-between rounded-md transition-colors ${
                    activeTab === "projects"
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium"
                      : isProjectActive
                      ? "text-zinc-900 dark:text-zinc-100 bg-zinc-100/70 dark:bg-zinc-900/70"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  <button
                    onClick={() => handleNavigate("projects")}
                    className="flex-1 flex items-center gap-2.5 px-2.5 py-2 text-xs font-mono text-left"
                  >
                    <span className="opacity-60">{tab.num}</span>
                    <span>{tab.label}</span>
                  </button>

                  <button
                    onClick={() => setProjectsOpen((prev) => !prev)}
                    aria-label="Toggle projects list"
                    className="p-2 opacity-70 hover:opacity-100"
                  >
                    {projectsOpen ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Nested Project Sub-Tabs */}
                {projectsOpen && (
                  <div className="ml-4 pl-3 border-l border-zinc-200 dark:border-zinc-800 space-y-1 py-1">
                    {PROJECTS.map((project) => {
                      const subId = `project:${project.id}`;
                      const isSubActive = activeTab === subId;

                      return (
                        <button
                          key={project.id}
                          onClick={() => handleNavigate(subId)}
                          className={`w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md text-xs text-left transition-colors ${
                            isSubActive
                              ? "bg-zinc-200/80 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60"
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <FolderGit2 className="w-3.5 h-3.5 shrink-0 opacity-70" />
                            <span className="truncate">
                              {project.shortTitle || project.title}
                            </span>
                          </span>

                          {project.category === "Android" && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-200/70 dark:bg-zinc-800/90 text-zinc-500 dark:text-zinc-400 shrink-0">
                              APK
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Theme Toggle */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <span className="text-[11px] font-mono text-zinc-400">
          Batangas · Las Piñas
        </span>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle theme"
          className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md">
        <button
          onClick={() => handleNavigate("overview")}
          className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100"
        >
          {PROFILE.handle}.dev
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommand}
            className="px-2 py-1 text-[11px] font-mono rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500"
          >
            Alt+K
          </button>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-1.5 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="w-64 h-full bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800"
          >
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 w-64 h-screen border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950">
        <SidebarContent />
      </aside>
    </>
  );
}