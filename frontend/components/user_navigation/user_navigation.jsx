import { Link } from 'react-router-dom';
import React from 'react';

export class UserNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='user-dropdown-items'>
        <li className='item'><Link to='/events'>Browse Events</Link></li>
        <li className='item'><Link to='/mytickets'>Tickets</Link></li>
        <li className='item'>Saved</li>
        <li className='item'><Link to='/myevents'>Manage Events</Link></li>
        <li className='item'><Link to='/event/new'>Create Event</Link></li>
        <li className='item'><button onClick={this.props.logout}>Log out</button></li>
      </ul>
    );
  }
}

export default UserNavigation;
