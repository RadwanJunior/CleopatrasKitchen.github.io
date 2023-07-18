import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import ContactUs from '../container/ContactUs/ContactUs';
import Footer from '../container/Footer/Footer';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <ContactUs />
            <Footer />
        </div>
    );
}