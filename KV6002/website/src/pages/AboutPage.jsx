import React from 'react';
import AboutPageText from '../components/AboutPageText';
import Footer from '../components/Footer';

function AboutPage() {
    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen">
            <div className="flex-grow">
                <AboutPageText />
            </div>
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}

export default AboutPage;
