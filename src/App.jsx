import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CommandPalette from "./components/CommandPalette";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [commandOpen, setCommandOpen] = useState(false);

  // Sync dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  // Scroll reading pane to top when switching tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // Global Alt+K and Escape shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCommandOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenProjectById = (projectId) => {
    setActiveTab(`project:${projectId}`);
  };

  const renderOverview = () => (
    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
      <Hero onNavigate={setActiveTab} />
      <Projects
        onSelectProject={(project) => handleOpenProjectById(project.id)}
      />
      <Stack />
      <Experience onSelectProject={handleOpenProjectById} />
      <Certificates />
      <Contact />
    </div>
  );

  const renderActiveView = () => {
    if (activeTab.startsWith("project:")) {
      const projectId = activeTab.replace("project:", "");
      return (
        <ProjectDetail
          projectId={projectId}
          onSelectTab={setActiveTab}
        />
      );
    }

    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "projects":
        return (
          <Projects
            onSelectProject={(project) => handleOpenProjectById(project.id)}
          />
        );
      case "stack":
        return <Stack />;
      case "experience":
        return <Experience onSelectProject={handleOpenProjectById} />;
      case "certificates":
        return <Certificates />;
      case "contact":
        return <Contact />;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCommand={() => setCommandOpen(true)}
      />

      {/* Right Reading Pane (offset by w-64 on desktop) */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-3xl mx-auto px-6">
          {renderActiveView()}
        </main>
        <div className="w-full max-w-3xl mx-auto px-6">
          <Footer />
        </div>
      </div>

      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onSelectProject={(project) => handleOpenProjectById(project.id)}
        onSelectTab={setActiveTab}
      />
    </div>
  );
}