import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import ReservationForm from '../container/Reservation/ReservationForm';
import Footer from '../container/Footer/Footer';


export default function () {
    return (
        <div>
            <AlternateNavbar />
            <ReservationForm />
            <Footer />
        </div>
    );
}