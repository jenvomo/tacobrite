import { Link } from 'react-router-dom';
import React from 'react';

const UserNavigation = ({ logout }) => (
  <ul hidden className='user-nav-dropdown hidden'>
    <li>Tickets</li>
    <li>Saved</li>
    <Link to='/api/event/new' value='CreateEvent' />
    <button onClick={logout}>Log out</button>
  </ul>
);

export default UserNavigation;
