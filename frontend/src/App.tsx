
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Pages
import About from "./pages/About/About";
import EducationTimeline from "./pages/Education/EducationTimeline";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Updates from "./pages/Updates/Updates";
// ...other imports

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-main-dark">
        <Sidebar />
        <main className="flex-1 bg-main-dark min-h-screen p-10">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<EducationTimeline />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/updates" element={<Updates />} />
            {/* ...other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
