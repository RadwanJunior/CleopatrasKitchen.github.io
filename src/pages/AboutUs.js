import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import AboutUsIntro from '../container/AboutUsIntro/AboutUsIntro';
import Footer from '../container/Footer/Footer';
import MissionValues from '../container/AboutUsMission/MissionValues';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <AboutUsIntro />
            <MissionValues />
            <Footer />
        </div>
    );
}