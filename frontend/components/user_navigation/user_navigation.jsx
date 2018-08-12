import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

export class UserNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='user-dropdown-items'>
        <li className='item'>Tickets</li>
        <li className='item'>Saved</li>
        <li className='item'><Link to='/event/new'>Create Event</Link></li>
        <li className='item'><button onClick={this.props.logout}>Log out</button></li>
      </ul>
    );
  }
}

export default UserNavigation;
