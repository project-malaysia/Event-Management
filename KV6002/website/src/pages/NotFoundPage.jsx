import React from 'react';
import Footer from '../components/Footer';
import image from '../assets/notFoundImage/404NotFound.jpg';

/**
 * Not found page
 * 
 * This component represents the page displayed when a user navigates to a route 
 * that does not exist.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function NotFoundPage() {
    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen">
            <div className="flex-grow">
                <h1 className="my-6 text-3xl font-semibold mb-4 text-gray-900 dark:text-white text-center">404</h1>
                <p className="text-center font-bold">Page Not Found</p>
            </div>
            <div className="px-5 py-5 mx-5 my-2 flex justify-center">
                <img src={image} alt="404NotFound" className="w-1/2 h-auto" />
            </div>
            <footer className="mt-10">
                <Footer />
            </footer>
        </div>
    );
}

export default NotFoundPage;
