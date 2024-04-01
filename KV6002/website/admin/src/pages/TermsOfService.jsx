import React from 'react';
import TermsOfServiceText from '../components/TermsOfServiceText';
import Footer from '../components/Footer';
import image from '../assets/mainImage/mainimage.jpg';

/**
 * TermsOfService page.
 * 
 * It represents the Terms of Service page of the website, 
 * located in the footer section, below the 'Legal' heading.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function TermsOfService() {
    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen relative">
            <div className="flex-grow">
                <div className="flex justify-center items-center relative">
                    {/* Display the image */}
                    <img src={image} alt="Terms of Service" className="w-auto max-h-60" />
                    {/* Text overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl italic bg-purple-600 py-4 dark:bg-gray-900">
                        <div className="px-4">
                            Terms of Service
                        </div>
                    </div>
                </div>
            </div>
            {/* Text section from TermsOfServiceText */}
            <div className="flex-grow">
                <TermsOfServiceText />
            </div>
            {/* Footer of the page */}
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}

export default TermsOfService;