import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import  Loader  from "./components/Loader";
import Sidebar from "./components/Sidebar";

import { Toaster } from "sonner";

// Lazy-loaded pages
import About from "./pages/About/About"; // Eager-load
const EducationTimeline = lazy(
  () => import("./pages/Education/EducationTimeline")
);
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const Stats = lazy(() => import("./pages/Stats/Stats"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
import { useEffect, useState } from "react";
const Dither = lazy(() => import("./components/Dither"));

function App()
{
  const [showDither, setShowDither] = useState(false);

  useEffect(() => {
    requestIdleCallback(() => setShowDither(true));
  }, []);

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1000);

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
        <div className="absolute w-full h-full z-0">
        {showDither && (
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
          )}
        </div>
      

        <div className="flex">
          <Sidebar />
          <main className="flex-1 md:px-8 md:py-2">
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  <Loader load={load} />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/education" element={<EducationTimeline />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
              </div>
              </>)}
      </Router>
    </>
  );
}

export default App;
