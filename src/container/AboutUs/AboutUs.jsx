import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Crispi, located in the most storied room in Victoria, is a must-visit culinary experience. The Pacific Northwest cuisine is based on regional ingredients, partnerships with local farmers and artisans, and utilizes our own chef’s herb and vegetable garden to ensure a fresh and unique meal.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img loading="lazy" src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our Menu celebrates an excellent selection of the best of the Pacific Northwest and top vintages from around the globe. Steeped in the history of the Pacific Northwest but with a modern feel,Our carefully curated menu features sustainably sourced seafood,raised meats and a wide variety of artisanal offerings.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
