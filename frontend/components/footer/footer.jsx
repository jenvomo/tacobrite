import React from 'react';
import { Link } from 'react-router-dom';


const Footer = state => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='footer'>
      <div className='footer-top'>

        <div className="find-events">
          <h1>Find Events</h1>
          <Link className="links"
            onClick={scrollToTop}
            to={`/events`}>Browse Events</Link>
        </div>

        <div className="create-event">
          <h1>Plan Events</h1>
          <Link className="links"
            onClick={scrollToTop}
            to={`/event/new`}>Create an Event</Link>
        </div>

        <div className="meet-developer">
          <h1>Meet the Developer</h1>

          <div className="dev-links">
            <a href="https://www.linkedin.com/in/meetjenvonmoltke/" target="_blank">
              <img src={window.images.linkedin}></img>
            </a>
            <a href="https://github.com/jenvomo" target="_blank">
              <img src={window.images.github}></img>
            </a>
          </div>
        </div>
      </div>

      <div className="site-basics">
        <img src={window.images.logo_footer}></img>
        <div>2018 tacobrite</div>
      </div>
    </div>
  );
};

export default Footer;
