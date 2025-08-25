import Navbar from "../components/Navbar";
import Workflow from "../components/Workflow";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";

const Home = () => {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Different sections */}
      <section id="home" className="min-h-screen bg-gray-200">
        <AboutMe />
      </section>

      <section id="workflow" className="min-h-screen bg-gray-100">
        <Workflow />
      </section>

      <section id="projects" className="min-h-screen bg-gray-200">
        <Projects />
      </section>

      <section id="experience" className="min-h-screen bg-gray-100">
        <Experience />
      </section>

      <section id="contact" className="min-h-lvh flex items-center bg-gray-200">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
