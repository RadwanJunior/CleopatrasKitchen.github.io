import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import MenuPage from '../container/MenuPage/MenuPage';
import MenuIntro from '../container/menuIntro/menuIntro';
import Footer from '../container/Footer/Footer';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <MenuIntro />
            <MenuPage />
            <Footer />
        </div>
    );
}


