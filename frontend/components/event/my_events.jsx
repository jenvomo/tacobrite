import React from 'react';
import MyEventItem from './my_event_item';

class MyEvents extends React.Component {
  componentDidMount () {
    this.props.fetchEvents();
  }

  render () {
    if (this.props.events) {
      return (
        <div>
          <div>Manage Events</div>

          <div>
            {this.props.myEvents.map(id =>
              <MyEventItem key={id} event={this.props.events[id]} />
            )}
          </div>
        </div>
      )
    } else {
      return
      <div>Hello</div>
    }
  }
}

export default MyEvents;
