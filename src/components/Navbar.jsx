import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    // Handle Scroll Behavior
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false); // Hide Navbar on scroll down
        } else {
            setIsVisible(true); // Show Navbar on scroll up
        }
        setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Close menu when a link is clicked
    const handleMenuClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // Close the mobile menu
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="w-full px-3 sm:px-1 sm:max-w-[50rem] mx-auto py-4 flex justify-between items-center">
                {/* Logo / Name */}
                <button
                    className="text-2xl font-bold text-gray-800"
                    onClick={() => handleMenuClick("home")}
                >
                    Arslan Javaid
                </button>

                {/* Hamburger Button for Smaller Screens */}
                <button
                    className="block md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                menuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

                {/* Menu Links - Mobile */}
                <ul
                    className={`md:flex text-gray-700 font-medium ${menuOpen
                            ? "block absolute top-full left-0 w-full bg-gray-100 shadow-md py-4 space-y-2"
                            : "hidden md:flex"
                        }`}
                >
                    <li
                        className="cursor-pointer px-4 hover:text-blue-500"
                        onClick={() => handleMenuClick("workflow")}
                    >
                        Workflow
                    </li>
                    <li
                        className="cursor-pointer px-4 hover:text-blue-500"
                        onClick={() => handleMenuClick("projects")}
                    >
                        Projects
                    </li>
                    <li
                        className="cursor-pointer px-4 hover:text-blue-500"
                        onClick={() => handleMenuClick("experience")}
                    >
                        Experience
                    </li>
                    <li
                        className="cursor-pointer px-4 hover:text-blue-500"
                        onClick={() => handleMenuClick("contact")}
                    >
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
