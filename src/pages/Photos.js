import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar/AlternateNavbar';
import GalleryIntro from '../container/GalleryIntro/GalleryIntro';
import PhotoGallery from '../container/PhotoGallery/PhotoGallery';
import Footer from '../container/Footer/Footer';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';

const images = [
    { id: 1, url: image1, title: 'Image 1' },
    { id: 2, url: image2, title: 'Image 2' },
    { id: 3, url: image3, title: 'Image 3' },
    { id: 4, url: image4, title: 'Image 4' },
    { id: 5, url: image5, title: 'Image 5' },
    { id: 6, url: image6, title: 'Image 6' },
    { id: 7, url: image7, title: 'Image 7' },
    { id: 8, url: image8, title: 'Image 8' },
    { id: 9, url: image9, title: 'Image 9' },
    { id: 10, url: image10, title: 'Image 10' },
    { id: 11, url: image11, title: 'Image 11' },
    { id: 12, url: image12, title: 'Image 12' },
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
