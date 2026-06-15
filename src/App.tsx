import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { BootScreen } from "./components/boot/BootScreen";
import { BootReadyContext } from "./components/boot/BootContext";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

/** Show the boot intro once per session, and only when landing on Home. */
function shouldBoot(): boolean {
  if (typeof window === "undefined") return false;
  if (sessionStorage.getItem("booted") === "1") return false;
  const path = window.location.hash.replace(/^#/, "");
  return path === "" || path === "/";
}

export default function App() {
  const [showBoot, setShowBoot] = useState(shouldBoot);
  const [ready, setReady] = useState(() => !shouldBoot());

  return (
    <BootReadyContext.Provider value={ready}>
      <HashRouter>
        <ScrollToTop />
        <PageShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageShell>
      </HashRouter>
      {showBoot && (
        <BootScreen
          onReady={() => {
            // Boot finished: reveal the site behind and let the hero type in.
            sessionStorage.setItem("booted", "1");
            setReady(true);
          }}
          onClosed={() => setShowBoot(false)}
        />
      )}
    </BootReadyContext.Provider>
  );
}
