import React from 'react';
import { Link } from 'react-router-dom';
import UserNavigation from '../user_navigation/user_navigation';

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
        <li className='nav-link'>Help</li>
        <li className='user-dropdown'><img className="user-drop-img" src={window.images.user}></img>
          <UserNavigation currentUser={currentUser} logout={logout} />
        </li>
      </ul>
    </section>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Navigation;
