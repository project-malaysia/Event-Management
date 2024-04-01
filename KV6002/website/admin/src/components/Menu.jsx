import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo.jpg";

/**
 * Menu component.
 * 
 * This component represents the main navigation menu for the website,
 * displaying the logo of Rose Foundation and providing links to all 
 * main pages.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function Menu() {
    return (
        <div className="menu bg-purple-900 text-white dark:bg-black">
            <div className="flex items-center">
                {/* Logo */}
                <img src={logo} alt="Logo" className="h-24" />
                {/* Links */}
                <ul className="list-none flex space-x-4 p-4">
                    {/* About Page Link */}
                    <Link to="/about" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                        <li>About</li>
                    </Link>
                    {/* Events Page Link */}
                    <Link to="/Administrator" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                        <li>Events</li>
                    </Link>
                    {/* Calendar Page Link */}
                    <Link to="/calendar" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                        <li>Calendar</li>
                    </Link>
                    {/* Community & Forum Page Link */}
                    <Link to="/forum" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                        <li>Community & Forum</li>
                    </Link>
                    {/* Sign In Page Link */}
                    <Link to="/signin" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                        <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Menu;
