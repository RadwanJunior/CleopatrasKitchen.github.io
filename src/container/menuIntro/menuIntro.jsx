import React from 'react';
import './menuIntro.css';

const MenuIntro = () => {
    return (
        <section className="menu-intro">
            <div className="menu-intro-content">
                <h1 className="app__header-h1">Our Divine Menu</h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}>
                    Dive into our diverse and exotic menu, showcasing the best of Egyptian culinary traditions. 
                    Every dish at Cleopatra's Kitchen is thoughtfully designed to take you on a gastronomical 
                    journey to the heart of Egypt.

                    From our tantalizing starters to our exquisite mains and delectable desserts, 
                    each course is an authentic Egyptian feast that will leave your taste buds longing for more. 
                    The vibrant flavours and rich textures of our dishes reflect the depth and diversity 
                    of Egypt’s cultural heritage.

                    Each dish is prepared using the freshest local ingredients, bringing the true Egyptian 
                    flavours to your table. So come, immerse yourself in a unique culinary adventure and savour 
                    the real taste of Egypt at Cleopatra's Kitchen.                
                </p>
            </div>
        </section>
    );
};

export default MenuIntro;
