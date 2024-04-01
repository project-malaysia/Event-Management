import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Administrator() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-purple-200 dark:bg-gray-800 flex-grow p-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Administrators Page</h1>
                <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">Administrators can Update, Delete or Add Cervical Cancer Screening Events</p>
                <div className="flex flex-col items-start space-y-3">
                    <Link to="/AddEvent" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Add Events
                    </Link>
                    <Link to="/DeleteEvent" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Delete Events
                    </Link>
                    <Link to="/UpdateEvent" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Update Events
                    </Link>
                </div>
            </div>
            <footer className="bg-purple-200 dark:bg-gray-800 mt-auto">
                <Footer />
            </footer>
        </div>
    );
}

export default Administrator;