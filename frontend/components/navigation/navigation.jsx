import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <section className="main-nav">
      <img src={window.images.logo}></img>
      <ul className='main-nav-options'>
        <Link className='nav-link' to='/events'>Browse Events</Link>
        <li>Help</li>
        <Link  className='nav-link'to='/login'>Sign In</Link>
      </ul>
    </section>
  );

  const personalGreeting = () => (
    <section className="main-nav">
      <img src={window.images.logo}></img>
      <ul className='main-nav-options'>
        <Link className='nav-link' to='/events'>Browse Events</Link>
        <Link className='nav-link' to='/event/new'>Create Event</Link>
        <li>Help</li>
        <li>{currentUser.first_name}</li>
      </ul>
    </section>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Navigation;
