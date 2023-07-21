import React from 'react';
import { useNavigate } from 'react-router-dom';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleAboutUsButtonClick = () => {
    navigate('/about');
  };

  const handleOurHistoryButtonClick = () => {
    navigate('/history');
  };

  return (

    <div className="app__aboutus app__bg flex__center section__padding" id="about">

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Welcome to a culinary haven where Egypt's coastal heritage blends seamlessly with the art of fine dining. At our distinguished Egyptian seafood restaurant, we celebrate the rich flavors of the Mediterranean, crafting extraordinary experiences for our cherished guests.

            Inspired by age-old recipes and the freshest catch, our talented chefs infuse each dish with modern finesse, preserving the authenticity of our traditional roots. Join us on this epicurean adventure as we present the finest in Egyptian seafood delicacies.

            Discover our heritage, vision, and the passionate team behind our extraordinary journey on our main About Us page.

            Get ready for a seafood experience like no other! </p>
          <button type="button" className="custom__button" onClick={handleAboutUsButtonClick}>Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">At the heart of our culinary venture lies a deep appreciation for Egypt's coastal treasures. Our story began with a vision to revive the ancient flavors of Egyptian seafood, blending tradition with contemporary finesse.

            Guided by passion and a commitment to excellence, we've embarked on a journey to source the freshest catch and craft exceptional dishes. Our talented chefs infuse modern creativity into time-honored recipes, creating a symphony of tastes that celebrate our rich heritage.

            Join us in this timeless tale of flavors and shared moments as we continue to honor Egypt's culinary legacy, one extraordinary dish at a time. To learn more, visit Our History page. </p>
          <button type="button" className="custom__button" onClick={handleOurHistoryButtonClick}>Know More</button>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
