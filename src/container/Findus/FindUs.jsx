import React from 'react';

import { useNavigate } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">123 Street, Ottawa, ON, Canada</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 08:00 am - 10:00 pm</p>
        <p className="p__opensans">Sat - Sun: 07:00 am - 11:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={handleButtonClick}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);
};

export default FindUs;
