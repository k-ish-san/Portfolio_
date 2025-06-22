import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Toaster } from "sonner";
import Dither from "./components/Dither";

// Pages
import About from "./pages/About/About";
import EducationTimeline from "./pages/Education/EducationTimeline";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Achievements from "./pages/Achievements/Achievements";
import Stats from "./pages/Stats/Stats";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      {/* Toast notifications */}
      <Toaster position="top-center" richColors closeButton />

      <Router>
        {/* Dither background effect */}
        <div className="fixed inset-0 -z-10">
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
        </div>

        {/* Main layout */}
        <div className="flex min-h-screen w-full overflow-hidden">
          <Sidebar />
          <main className="flex-1 px-4 py-2 md:px-8 md:py-4 overflow-y-auto">
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
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
