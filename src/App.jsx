import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Project Details Page (Dynamic Route) */}
          <Route path="/projects" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
