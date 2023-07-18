import React from 'react';
import './GalleryIntro.css';

const GalleryIntro = () => {
    return (
        <section className="gallery-intro">
            <div className="gallery-intro-content">
                <h1 className="app__header-h1">Our Photo Gallery</h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}>
                    Here's a sneak peek of our delightful dishes and beautiful dining ambiance.
                </p>
            </div>
        </section>
    );
};

export default GalleryIntro;
