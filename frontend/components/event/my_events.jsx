import React from 'react';
import MyEventItem from './my_event_item';

class MyEvents extends React.Component {

  render () {
    return (
      <div>
        <div>Manage Events</div>

        <div>
          {this.props.events.map(event =>
            <MyEventItem event={event} />
          )}
        </div>
      </div>
    )
  }
}

export default MyEvents;
