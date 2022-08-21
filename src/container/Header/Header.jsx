import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">it is not just Food. It is an Experience</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Our menu feature familiar, elevated comforts including a variety of freshly brewed wines, beers, and cocktails with all-day options alongside enticing entrées like our Prime Rib Dinner, Short Rib Stroganoff and other thoughtfully sourced proteins.
      </p>
      <a href="#menu" className="custom__button">Explore Menu</a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
