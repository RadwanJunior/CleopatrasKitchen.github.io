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
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec quam sed tortor lacinia ultricies. Morbi varius lectus nec quam lobortis, ac dignissim nulla consectetur. Proin in metus at ante rhoncus facilisis sed et nunc. Sed ultrices nunc a tristique sollicitudin. </p>
          <button type="button" className="custom__button" onClick={handleAboutUsButtonClick}>Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec quam sed tortor lacinia ultricies. Morbi varius lectus nec quam lobortis, ac dignissim nulla consectetur. Proin in metus at ante rhoncus facilisis sed et nunc. Sed ultrices nunc a tristique sollicitudin. </p>
          <button type="button" className="custom__button" onClick={handleOurHistoryButtonClick}>Know More</button>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
