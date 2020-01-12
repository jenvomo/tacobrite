import React from 'react';
import MyEventItem from './my_event_item';

class MyEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      category: null
    }
  }
  
  componentDidMount () {
    this.props.fetchEvents(this.state);
  }

  render () {
    if (this.props.events) {
      return (
        <div className='manage-events'>
          <div className='container'>
            <div className='header'>
              <div className='manage'>Manage Events</div>
              <div className='organizer-dropdown'></div>
            </div>

            <div className='main-content'>
              <div className='left-pane'>
                <input
                  type='text'
                  placeholder='Search for events and attendees'></input>

                <div className='events'>
                  {this.props.myEvents.map(id =>
                    <MyEventItem key={id} event={this.props.events[id]} deleteEvent={this.props.deleteEvent} />
                  )}
                </div>
              </div>

              <div className='right-pane'>
                <label className='right-header'>Merchant Agreement Update</label>
                <p className='desc'>We’ve updated our Merchant Agreement. By continuing your use of tacobrite, you agree to the updated Merchant Agreement.</p>

                <label className='right-header'>tacobrite organizer</label>
                <p className='desc'>Manage orders and check-ins with your iPad, iPhone, or iPod touch with the new tacobrite organizer app.</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div>Hello</div>
    }
  }
}

export default MyEvents;
