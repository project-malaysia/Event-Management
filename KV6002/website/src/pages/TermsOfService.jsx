import React from 'react';
import TermsOfServiceText from '../components/TermsOfServiceText';
import Footer from '../components/Footer';

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
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen">
            <div className="flex-grow">
                <TermsOfServiceText />
            </div>
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}

export default TermsOfService;
