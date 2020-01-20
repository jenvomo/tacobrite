import React from 'react';
import { Link } from 'react-router-dom';
import UserNavigation from '../user_navigation/user_navigation';
import SearchBarContainer from '../search/search_bar_container';

const Navigation = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <section className="main-nav">
      <div className="logo-search">
        <Link className="linked"to="/events">
          <div className="logo">
            <img src={window.images.logo}></img>
          </div>
        </Link>

        <SearchBarContainer />
      </div>

      <ul className='main-nav-options'>
        <Link className='nav-link' to='/events'>Browse Events</Link>
        <li className='nav-link'>Help</li>
        <Link className='nav-link' to='/login'>Sign In</Link>
      </ul>
    </section>
  );

  const personalGreeting = () => (
    <section className="main-nav">
      <div className="logo-search">
        <Link className="linked" to="/events">
          <div className="logo">
            <img src={window.images.logo}></img>
          </div>
        </Link>
        
        <SearchBarContainer />
      </div>

      <ul className='main-nav-options'>
        <Link className='nav-link' to='/events'>Browse Events</Link>
        <li className='nav-link'>Help</li>
        <Link className='nav-link create' to='/event/new'>Create Event</Link>
        <li className='user-dropdown'><img className="user-drop-img" src={window.images.user}></img>
          <UserNavigation currentUser={currentUser} logout={logout} />
        </li>
      </ul>
    </section>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Navigation;
