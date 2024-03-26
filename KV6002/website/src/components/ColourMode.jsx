import React, { useState, useEffect, useRef } from "react";

/**
 * 
 * ColourMode Component
 * 
 * This component allows the user to switch between light mode and dark 
 * mode for the website.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function ColourMode() {
    const initialPreferenceColor = localStorage.getItem("preferenceColor") === "dark";
    const [darkMode, setDarkMode] = useState(initialPreferenceColor);
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const boxRef = useRef(null);

    {/* Apply dark mode or light mode based on user preference */ }
    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("preferenceColor", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("preferenceColor", "light");
        }

        {/* Add event listener to handle clicks outside the box */ }
        window.addEventListener("click", handleOutsideClick);

        {/* Clean up event listener when component unmounts */ }
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [darkMode]);

    {/* Toggle box visibility */ }
    const toggleBox = () => {
        setIsBoxOpen(!isBoxOpen);
    };

    {/* Handle clicks outside the box */ }
    const handleOutsideClick = (event) => {
        {/* Check if the click occurred outside of the box */ }
        if (boxRef.current && !boxRef.current.contains(event.target)) {
            setIsBoxOpen(false);
        }
    };

    return (
        <div className="relative flex items-center left-9" ref={boxRef}>
            {/* Button to toggle theme */}
            <button
                onClick={toggleBox}
                className="p-2 rounded-lg bg-purple-500 hover:bg-purple-600 shadow-md dark:hover:bg-gray-600 dark:bg-gray-800 dark:border border-white"
            >
                Theme
            </button>
            {/* Box to select theme */}
            {isBoxOpen && (
                <div className="absolute top-0 left-20 w-40 p-2 bg-purple-500 dark:bg-gray-800 dark:border-gray-700 shadow-md flex flex-col">
                    <div className="p-2 flex flex-col">
                        {/* Button to switch to light mode */}
                        <button
                            onClick={() => setDarkMode(false)}
                            className="w-full p-2 rounded-lg hover:bg-purple-700 shadow-md border-2 border border-black dark:hover:bg-gray-600 dark:border-white mb-2"
                        >
                            ☀️ Light mode
                        </button>
                        {/* Button to switch to dark mode */}
                        <button
                            onClick={() => setDarkMode(true)}
                            className="w-full p-2 rounded-lg hover:bg-purple-700 shadow-md border-2 border border-black dark:hover:bg-gray-600 dark:border-white"
                        >
                            🌙 Dark mode
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ColourMode;
