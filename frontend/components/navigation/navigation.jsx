import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <section className="main-nav">
      <img src={window.images.logo}></img>
      <ul className='main-nav-options'>
        <li>Browse Events</li>
        <li>Help</li>
        <Link  className='nav-link'to='/login'>Sign In</Link>
      </ul>
    </section>
  );

  const personalGreeting = () => (
    <section className="main-nav">
      <img src={window.images.logo}></img>
      <ul className='main-nav-options'>
        <li>Browse Events</li>
        <Link className='nav-link' to='/event/new'>Create Event</Link>
        <li>Help</li>
        <li>{currentUser.first_name}</li>
      </ul>
    </section>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Navigation;
