import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <img src={images.quote} alt="quote" />
        <p className="p__opensans">As a chef, I craft dishes that embrace our rich coastal legacy, infusing innovation to create pure culinary magic. Join us on this gastronomic journey of enchanting flavors and extraordinary seafood experiences. Bon appétit!</p>
      </div>

      <div className="app__chef-sign">
        <p>Adham Radwan</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
