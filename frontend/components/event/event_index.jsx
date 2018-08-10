import React from 'react';

class EventIndex extends React.Component {

  componentDidMount () {
    this.props.fetchBenches();
  }

  render () {
    return (
      <div>
        <p>Events</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default EventIndex;
