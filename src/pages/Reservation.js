import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import Reservation from '../container/Reservation/Reservation';
import Footer from '../container/Footer/Footer';

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <Reservation />
            <Footer />
        </div>
    );
}