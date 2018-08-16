import React from 'react';
import MyEventItem from './my_event_item';

class MyEvents extends React.Component {
  componentDidMount () {
    this.props.fetchUsersEvents();
  }

  render () {
    console.log(this.props);
    if (this.props.myEvents) {
      return (
        <div>
          <div>Manage Events</div>

          <div>
            {this.props.myEvents.map(event =>
              <MyEventItem event={event} />
            )}
          </div>
        </div>
      )
    } else {
      return
      <div></div>
    }
  }
}

export default MyEvents;
