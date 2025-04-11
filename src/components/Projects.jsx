import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Editmaster",
    description: "A full-featured MERN stack web app for photo & PDF editing with authentication and profile management.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/editmaster.png", // Replace with actual image path
    liveUrl: "https://editmaster.example.com",
    githubUrl: "https://github.com/arslan/editmaster",
  },
  {
    title: "Rydeze",
    description: "Cab-booking platform for a closed community, enabling users to book rides and riders to manage requests.",
    techStack: ["React", "Express", "MongoDB"],
    image: "/images/rydeze.png",
    liveUrl: "https://rydeze.example.com",
    githubUrl: "",
  },
  {
    title: "Obscurium",
    description: "A crypto platform with portfolio tracking, swap functionality, and Binance API integration.",
    techStack: ["React", "Node.js", "Binance API"],
    image: "/images/obscurium.png",
    liveUrl: "https://obscurium.example.com",
    githubUrl: "",
  },
  {
    title: "DreamNest",
    description: "This is a placeholder for another awesome project. Replace this with real project info later.",
    techStack: ["React", "TailwindCSS"],
    image: "/images/demo.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        💼 Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-lg border hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-2 py-1 rounded-full text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
              >
                <ExternalLink className="w-4 h-4" /> Live
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline flex items-center gap-1 text-sm"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
