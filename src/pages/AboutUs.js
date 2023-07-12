import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import AboutUsIntro from '../container/AboutUsIntro/AboutUsIntro';
import Footer from '../container/Footer/Footer';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <AboutUsIntro />
            <Footer />
        </div>
    );
}