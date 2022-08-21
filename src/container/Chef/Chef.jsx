/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img loading="lazy" src={images.chef2} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img loading="lazy" src={images.quote} alt="quote_image" />
        </div>
        <p className="p__opensans"> Eating is so intimate. It's very sensual. When you invite someone to sit at your table and you want to cook for them, you're inviting a person into your life.</p>
      </div>

      <div className="app__chef-sign">
        <p>Maya Angelou</p>
      </div>
    </div>
  </div>
);

export default Chef;
