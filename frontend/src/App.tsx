import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import { Toaster } from "sonner";

// Eager load About page
import About from "./pages/About/About";

// Lazy-load other pages
const EducationTimeline = lazy(
  () => import("./pages/Education/EducationTimeline")
);
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const Stats = lazy(() => import("./pages/Stats/Stats"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Dither = lazy(() => import("./components/Dither"));

function App() {
  const [showDither, setShowDither] = useState(false);
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    requestIdleCallback(() => setShowDither(true));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <Router>
        {load ? (
          <Loader load={load} />
        ) : (
          <>
            {/* Defer Dither with idle callback */}
            <div className="absolute w-full h-full z-0 pointer-events-none">
              {showDither && (
                <Suspense fallback={null}>
                  <Dither
                    waveColor={[0, 0, 1]}
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.2}
                  />
                </Suspense>
              )}
            </div>

            <div className="flex">
              <Sidebar />
              <main className="flex-1 md:px-8 md:py-2">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route
                    path="/education"
                    element={
                      <Suspense fallback={<Loader load={true} />}>
                        <EducationTimeline />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/skills"
                    element={
                      <Suspense fallback={<Loader load={true} />}>
                        <Skills />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/experience"
                    element={
                      <Suspense fallback={<Loader load={true} />}>
                        <Experience />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/projects"
                    element={
                      <Suspense fallback={<Loader load={true} />}>
                        <Projects />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/achievements"
                    element={
                      <Suspense fallback={<Loader load={true} />}>
                        <Achievements />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/stats"
                    element={
                      <Suspense fallback={<Loader load={true} />}>
                        <Stats />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <Suspense fallback={<Loader load={true} />}>
                        <Contact />
                      </Suspense>
                    }
                  />
                </Routes>
              </main>
            </div>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
