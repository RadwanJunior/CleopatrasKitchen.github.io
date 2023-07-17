import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import MenuPage from '../container/MenuPage/MenuPage';
import Footer from '../container/Footer/Footer';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <MenuPage />
            <Footer />
        </div>
    );
}


