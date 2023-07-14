import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import Timeline from '../container/Timeline/Timeline';
import Footer from '../container/Footer/Footer';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <Timeline />
            <Footer />
        </div>
    );
}