import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import Footer from '../container/Footer/Footer';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <h1>Error 404: Page Not Found</h1>
            <Footer />
        </div>
    );
}