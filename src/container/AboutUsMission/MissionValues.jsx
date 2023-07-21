import React from 'react';
import './MissionValues.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const MissionValues = () => (
    <section className="mission-values">
        <h2 className="mission-values-h2">Our Mission and Values</h2>
        <div className="container">
            <div className="box">
                <div className="icon"><i className="fa fa-circle" aria-hidden="true"></i></div>
                <div className="content">
                    <h3>Exquisite Seafood</h3>
                    <p>We're dedicated to crafting exquisite seafood dishes that showcase the flavors of the Mediterranean and Red Sea.</p>
                </div>
                <div className="text">Exquisite Seafood</div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-circle" aria-hidden="true"></i></div>
                <div className="content">
                    <h3>Unparalleled Service</h3>
                    <p>Our mission is to provide unparalleled customer service, ensuring every visit is exceptional.</p>
                </div>
                <div className="text">Unparalleled Service</div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-circle" aria-hidden="true"></i></div>
                <div className="content">
                    <h3>Integrity & Transparency</h3>
                    <p>We conduct our business with integrity, transparency, and a commitment to quality and hygiene.</p>
                </div>
                <div className="text">Integrity & Transparency</div>
            </div>
        </div>
    </section>
);

export default MissionValues;
