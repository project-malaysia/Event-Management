import React from "react";
import { Link } from "react-router-dom";
import ColourMode from "../components/ColourMode";

/**
 * Footer Component.
 * 
 * This is the footer that is displayed on every page of the website. 
 * It provides easy access to important sections and features of the site,
 * and it provides easy navigation and accessibility.
 * 
 * Features:
 * - Quick Links: Direct links to each main page of the website for easy navigation.
 * - Privacy Policy and Terms of Service: Links to the legal documents governing the use of the website.
 * - Settings: Allows users to switch between light mode and dark mode for better accessibility.
 * - Social Media Links: Links to the social media profiles of the Rose Foundation, 
 *   created and managed by Petros Tamboutsiaris.
 * - Copyright Notice at the bottom.
 *  
 * @author Petros Tamboutsiaris W21004471
 */

function Footer() {
    /**
     * Scrolls to the top of the page when a quick link is clicked.
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-purple-900 text-white pt-8 dark:bg-black">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Quick Links Section */}
                <div className="flex flex-col md:flex-row justify-end md:justify-start items-center md:items-start">
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 mr-12">
                        <h3 className="mx-6 text-lg font-bold mb-2">Quick Links</h3>
                        {/* Quick Links */}
                        <Link to="/about" className="mx-6 text-blue-200 hover:underline mb-2 dark:text-blue-500" onClick={scrollToTop}>About</Link>
                        <Link to="/events" className="mx-6 text-blue-200 hover:underline mb-2 dark:text-blue-500" onClick={scrollToTop}>Events</Link>
                        <Link to="/calendar" className="mx-6 text-blue-200 hover:underline mb-2 dark:text-blue-500" onClick={scrollToTop}>Calendar</Link>
                        <Link to="/community-&-forum" className="mx-6 text-blue-200 hover:underline dark:text-blue-500" onClick={scrollToTop}>Community & Forum</Link>
                    </div>
                    {/* Legal Links Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-2 mr-40">Legal</h3>
                        {/* Legal Links */}
                        <Link to="/privacy-policy" className="text-blue-200 hover:underline mb-2 dark:text-blue-500" onClick={scrollToTop}>Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-blue-200 hover:underline dark:text-blue-500" onClick={scrollToTop}>Terms Of Service</Link>
                    </div>
                    {/* Settings Section */}
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 mr-40">
                        <h3 className="mx-10 text-lg font-bold mb-2">Settings</h3>
                        {/* Theme Mode Switch */}
                        <ColourMode />
                    </div>
                    {/* Social Media Links Section */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-2">Follow us on our social media to be informed about the events and much more!</h3>
                        {/* Social Media Links */}
                        <nav className="flex space-x-4">
                            <a href="https://www.instagram.com/rose_foundationn?igsh=MWZhOGxyZGE1czg5Nw==" className="text-blue-200 hover:underline dark:text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.facebook.com/" className="text-blue-200 hover:underline dark:text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.tiktok.com/@rose_foundationn?_t=8l51N5sEsa0&_r=1" className="text-blue-200 hover:underline dark:text-blue-500" target="_blank" rel="noopener noreferrer">TikTok</a>
                            <a href="https://discord.gg/Fr6vwFbn" className="text-blue-200 hover:underline dark:text-blue-500" target="_blank" rel="noopener noreferrer">Discord</a>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Copyright Notice */}
            <div className="text-center mt-4">
                © {new Date().getFullYear()} | ROSE Foundation
            </div>
        </footer>
    );
}

export default Footer;
