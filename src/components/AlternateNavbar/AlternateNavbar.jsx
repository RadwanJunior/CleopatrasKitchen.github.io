import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import images from '../../constants/images';
import './AlternateNavbar.css';

const AlternateNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__altnavbar">
      <div className="app__altnavbar-logo">
        <img src={images.cleopatraslogo} alt="logo" />
      </div>
      <ul className="app__altnavbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about">About</Link>
        </li>
        <li className="p__opensans">
          <Link to="/history">History</Link>
        </li>
        <li className="p__opensans">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p__opensans">
          <Link to="/photos">Photos</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <Link to="/">Home</Link>
              </li>
              <li className="p__opensans">
                <Link to="/about">About</Link>
              </li>
              <li className="p__opensans">
                <Link to="/history">History</Link>
              </li>
              <li className="p__opensans">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="p__opensans">
                <Link to="/photos">Photos</Link>
              </li>
              <li className="p__opensans">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default AlternateNavbar;
