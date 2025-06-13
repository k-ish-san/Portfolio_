
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Toaster } from "sonner";
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
        <div className="flex min-h-screen bg-main-dark">
          <Sidebar />
          <main className="flex-1 bg-main-dark min-h-screen p-10">
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
