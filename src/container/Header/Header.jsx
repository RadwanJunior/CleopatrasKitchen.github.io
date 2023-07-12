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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec quam sed tortor lacinia ultricies. Morbi varius lectus nec quam lobortis, ac dignissim nulla consectetur. Proin in metus at ante rhoncus facilisis sed et nunc. Sed ultrices nunc a tristique sollicitudin.
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

