import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=youremail@example.com&su=Hello from your portfolio&body=Hey Arslan, I checked out your portfolio and wanted to reach out.`;

  const handleWhatsappClick = () => {
    setShowWhatsapp(!showWhatsapp);
  };

  // Shared Tailwind classes for minimal buttons
  const baseBtn =
    "flex items-center gap-2 px-5 py-3 rounded-xl font-medium border transition duration-300";
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto p-6 text-center bg-white rounded-2xl shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Let's Connect</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Gmail */}
        <motion.a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
          className={`${baseBtn} border-black text-black hover:bg-red-600 hover:text-white`}
        >
          <FaEnvelope /> Email Me
        </motion.a>

        {/* WhatsApp */}
        <motion.button
          onClick={handleWhatsappClick}
          {...motionProps}
          className={`${baseBtn} border-black text-black hover:bg-green-600 hover:text-white`}
        >
          <FaWhatsapp /> WhatsApp
        </motion.button>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Arslanj9"
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
          className={`${baseBtn} border-black text-black hover:bg-black hover:text-white`}
        >
          <FaGithub /> GitHub
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/arslan-javaid-41b416182/"
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
          className={`${baseBtn} border-black text-black hover:bg-blue-700 hover:text-white`}
        >
          <FaLinkedin /> LinkedIn
        </motion.a>
      </div>

      {/* WhatsApp Number Reveal */}
      {showWhatsapp && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-green-700 font-semibold text-lg"
        >
           +92 343 0105882
        </motion.div>
      )}
    </motion.div>
  );
};

export default Contact;
