import { motion } from "framer-motion";

const AboutMe = () => {

    // Define an object for the icons with their respective names
    const icons = [
        { name: "code", position: { top: "-10%", left: "5%" } },
        { name: "terminal", position: { top: "-7%", right: "8%" } },
        { name: "html", position: { bottom: "-25%", left: "10%" } },
        { name: "javascript",position: { bottom: "-25%", right: "20%" }  },
        { name: "css", position: { bottom: "-25%", right: "50%" } },
    ];

    // Function to generate random values for the animation
    const generateRandomValue = () => {
        return Math.random() * 30 + 5; // Random value between 5 and 15
    };


    return (
        <section
            id="home"
            className="relative h-screen bg-gray-100 flex items-center justify-center overflow-hidden px-6 sm:px-12"
        >



            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl">

                {/* Background Floating Icons */}
                {icons.map((icon, index) => (
                    <motion.span
                        key={index}
                        className="material-symbols-outlined text-3xl absolute opacity-30 hidden lg:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            scale: [0.8, 1.2, 1],
                            x: generateRandomValue(),
                            y: generateRandomValue(),
                        }}
                        transition={{
                            duration: 6, // Slower animation
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: Math.random() * 2, // Add random delay for each icon
                        }}
                        style={icon.position}
                    >
                        {icon.name}
                    </motion.span>
                ))}

                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Full Stack Developer
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    I'm a 24-year-old <span className="font-medium text-blue-500">MERN Stack Developer</span> with
                    2+ years of professional experience. I specialize in building dynamic, responsive, and modern web applications
                    using MongoDB, Express.js, React, and Node.js. My passion lies in creating innovative solutions that enhance user experiences.
                </motion.p>
            </div>
        </section>
    );
};

export default AboutMe;
