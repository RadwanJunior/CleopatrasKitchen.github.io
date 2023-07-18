import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import GalleryIntro from '../container/GalleryIntro/GalleryIntro';
import PhotoGallery from '../container/PhotoGallery/PhotoGallery';
import Footer from '../container/Footer/Footer';

import image1 from '../assets/gallery01.png';
import image2 from '../assets/gallery02.png';

const images = [
    { id: 1, url: image1, title: 'Image 1' },
    { id: 2, url: image2, title: 'Image 2' },
];

export default function () {
    return (
        <div>
            <AlternateNavbar />
            <GalleryIntro />
            <PhotoGallery images={images} />
            <Footer />
        </div>
    );
}
