import { motion } from 'framer-motion';
import { CheckCircle, ClipboardList, PenTool, MonitorPlay, Code2, Bug, Rocket, RefreshCw } from 'lucide-react';

const workflowSteps = [
  {
    icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
    title: 'Understanding the Problem',
    description: 'Start by understanding the goals, target users, and requirements of the project.',
  },
  {
    icon: <PenTool className="w-6 h-6 text-purple-600" />,
    title: 'Planning & Roadmapping',
    description: 'Break down the project into clear tasks and milestones for smooth execution.',
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-yellow-600" />,
    title: 'System Design & Architecture',
    description: 'Design the project structure, data flow, and overall architecture before coding.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-green-600" />,
    title: 'Frontend & Backend Development',
    description: 'Develop both client-side and server-side with a focus on modular and scalable code.',
  },
  {
    icon: <Bug className="w-6 h-6 text-red-600" />,
    title: 'Testing & Quality Assurance',
    description: 'Test thoroughly to catch bugs early and ensure a smooth user experience.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-600" />,
    title: 'Deployment & Delivery',
    description: 'Deploy the application and set up basic monitoring for performance.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
    title: 'Feedback & Continuous Improvement',
    description: 'Gather user feedback, monitor usage, and iterate for better results.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Workflow() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        My Workflow
      </motion.h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {workflowSteps.map((step, index) => (
          <motion.li 
            key={index} 
            variants={itemVariants} 
            whileHover={{ scale: 1.02, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)' }}
            className="flex items-center space-x-4 bg-white/70 backdrop-blur-md shadow-md p-4 rounded-2xl border transition duration-200 ease-in-out"
          >
            <div>{step.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}