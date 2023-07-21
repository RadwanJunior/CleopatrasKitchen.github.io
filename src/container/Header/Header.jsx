import React from 'react';
import { useNavigate } from 'react-router-dom';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/menu');
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Discover the epitome of fine dining with our captivating seafood restaurant. From coastal treasures to culinary artistry, indulge in the flavors of Egypt's finest seafood. 
        
        Join us for an unforgettable experience, celebrating the bounty of the sea in an ambiance of warmth and sophistication. 
        
        Welcome to a world of culinary perfection. Your extraordinary journey begins here.
        </p>
        <button type="button" className="custom__button" onClick={handleButtonClick}>
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;

