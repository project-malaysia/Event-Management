import React from 'react';
import PrivacyPolicyText from '../components/PrivacyPolicyText';
import Footer from '../components/Footer';

/**
 * PrivacyPolicy page.
 * 
 * It represents the Privacy Policy page of the website, 
 * located in the footer section, below the 'Legal' heading.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function PrivacyPolicy() {
    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen">
            <div className="flex-grow">
                <PrivacyPolicyText />
            </div>
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}

export default PrivacyPolicy;
