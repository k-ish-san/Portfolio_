import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import { Toaster } from "sonner";



// Eager load About page
import About from "./pages/About/About";
import DitherLayer from "./components/DitherLayer";

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


function App() {
  const [load, updateLoad] = useState(true);

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
            <div className="flex">
              <DitherLayer />
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
