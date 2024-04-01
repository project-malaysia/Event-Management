import React from 'react';
import AboutPageText from '../components/AboutPageText';
import Footer from '../components/Footer';
import image from '../assets/mainImage/mainimage.jpg';
import image1 from '../assets/aboutPageImages/image1.jpg';
import image2 from '../assets/aboutPageImages/image2.jpg';
import image3 from '../assets/aboutPageImages/image3.jpg';

/**
 * AboutPage page.
 * 
 * It represents the About page of the website.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function AboutPage() {
    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen relative">
            <div className="flex-grow">
                <div className="flex justify-center items-center relative">
                    {/* Display the image */}
                    <img src={image} alt="About" className="w-auto max-h-60" />
                    {/* Text overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-2xl italic bg-purple-600 py-4 dark:bg-gray-900">
                        <div className="px-4">
                            EMPOWERS WOMEN | ELIMINATES CERVICAL CANCER
                        </div>
                    </div>
                </div>
            </div>
            {/* Text section from AboutPageText */}
            <div className="flex-grow">
                <AboutPageText />
            </div>
            {/* Images */}
            <div className="pt-12 mx-9 my-1 flex flex-row">
                <div style={{ flex: '1', marginRight: '40px' }}>
                    <img src={image1} alt="AboutPic1" style={{ width: '100%' }} />
                </div>
                <div style={{ flex: '1' }}>
                    <img src={image2} alt="AboutPic2" style={{ width: '92%' }} />
                </div>
                <div style={{ flex: '1' }}>
                    <img src={image3} alt="AboutPic3" style={{ width: '92%' }} />
                </div>
            </div>
            {/* Footer of the page */}
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}

export default AboutPage;