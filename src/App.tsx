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
              <Sidebar />
              <main className="flex-1 md:px-8 md:py-2">
                <Suspense fallback={<Loader load={true} />}>
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
          </>
        )}
      </Router>
    </>
  );
}

export default App;
