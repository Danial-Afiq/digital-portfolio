import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Lab } from "./pages/Lab";
import { NotFound } from "./pages/NotFound";
import { Playground } from "./pages/Playground";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { Stack } from "./pages/Stack";

const titles: Record<string, string> = {
  "/": "Danial Afiq | Security-Aware Software Engineer",
  "/projects": "Projects | Danial Afiq",
  "/experience": "Experience | Danial Afiq",
  "/stack": "Technical Stack | Danial Afiq",
  "/lab": "Lab | Danial Afiq",
  "/resume": "Resume | Danial Afiq",
  "/contact": "Contact | Danial Afiq",
  "/playground": "Terminal Playground | Danial Afiq",
};

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] ?? (location.pathname.startsWith("/projects/") ? "Project Case Study | Danial Afiq" : "Danial Afiq");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  );
}

export default function App() {
  return <HashRouter><AppRoutes /></HashRouter>;
}
