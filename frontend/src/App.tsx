
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
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
// ...other imports

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <div style={{
          width: "100%", height: "100%", position: "absolute", zIndex: -1
        }}>
          <Dither
            waveColor={[0, 0, 1]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.1}
          />
        </div>

        <div className="flex ">
          <Sidebar />
          <main className="flex-1  md:px-8">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/education" element={<EducationTimeline />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/contact" element={<Contact />} />
              {/* ...other routes */}
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
