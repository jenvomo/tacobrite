import React from 'react';
import MyEventItem from './my_event_item';

class MyEvents extends React.Component {
  componentDidMount () {
    this.props.fetchEvents();
  }

  render () {
    if (this.props.events) {
      return (
        <div className='manage-events'>
          <div className='header'>
            <div>Manage Events</div>
            <div>Dropdown for organizer</div>
          </div>

          <div className='left-pane'>
            <input
              type='text'
              placeholder='Search for events and attendees'></input>

            <div>
              {this.props.myEvents.map(id =>
                <MyEventItem key={id} event={this.props.events[id]} deleteEvent={this.props.deleteEvent} />
              )}
            </div>
          </div>

          <div className='right-pane'>
            <label>Merchant Agreement Update</label>
            <p>We’ve updated our Merchant Agreement. By continuing your use of Eventliter, you agree to the updated Merchant Agreement.</p>

            <label>Eventliter Organizer</label>
            <p>Manage orders and check-ins with your iPad, iPhone, or iPod touch with the new Eventliter Organizer app.</p>
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
