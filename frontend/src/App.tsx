
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Sidebar from "../components/Sidebar";

// Pages
import EducationTimeline from "../pages/Education/EducationTimeline";
// ...other imports

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-main-dark">
        <Sidebar />
        <main className="flex-1 bg-main-dark min-h-screen p-10">
          <Routes>
            <Route path="/education" element={<EducationTimeline />} />
            {/* ...other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
