import { Link } from 'react-router-dom';

/**
 * Menu component.
 * 
 * This component represents the main navigation menu for the website,
 * providing links to all main pages.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function Menu() {
    return (
        <div className="menu bg-purple-900 text-white p-4 dark:bg-black">
            <ul className="list-none flex space-x-4">
                {/* About Page Link */}
                <Link to="/about" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                    <li>About</li>
                </Link>
                {/* Events Page Link */}
                <Link to="/events" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                    <li>Events</li>
                </Link>
                {/* Calendar Page Link */}
                <Link to="/calendar" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                    <li>Calendar</li>
                </Link>
                {/* Community & Forum Page Link */}
                <Link to="/community" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                    <li>Community & Forum</li>
                </Link>
                {/* Sign In Page Link */}
                <Link to="/signin" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                    <li>Sign In</li>
                </Link>
                {/* Attendance Page Link */}
                <Link to="/attendance" className="text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black px-4 py-2 rounded-md">
                    <li>Attendance</li>
                </Link>
            </ul>
        </div>
    )
}

export default Menu;
