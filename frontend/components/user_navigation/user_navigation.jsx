import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

export class UserNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false};

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen () {
    this.setState({ isOpen: true });
  }

  handleClose () {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Navbar expanded={this.state.isOpen} onToggle={this.handleOpen}>
        <NavDropdown eventKey={1} title="demo">
          <MenuItem>Browse Events</MenuItem>
          <MenuItem divider />
          <MenuItem onClick={this.props.logout}>Log out</MenuItem>
        </NavDropdown>
      </Navbar>
    );
  }
}

export default UserNavigation;
