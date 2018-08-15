import React from 'react';

class EventShow extends React.Component {

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    this.props.fetchEvent(eventId);
  }

  // componentWillReceiveProps() {
  //   const eventId = this.props.match.params.eventId;
  //   this.props.fetchEvent(eventId);
  // }

  render () {
    const { event } = this.props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // const { date, time, title, description, imageUrl } = this.props.event;

    return (
      <div className="event-show">
        { event ? (
            <div className="event-container">
              <div className="event-show-header">
                <img src={event.imageUrl} />

                <div className="header-info">
                  <div className='event-fancy-date'>
                    <p className='month'>{months[event.date.month - 1].toUpperCase()}</p>
                    <p className='day'>{event.date.day}</p>
                  </div>

                  <div className="title">{event.title}</div>

                  <div className="loc">Location</div>

                  <div className="price">FREE</div>
                </div>
              </div>

              <div>
                <div>Bookmark</div>
                <button>TICKETS</button>
              </div>

              <div>
                <div>DESCRIPTION</div>
                <div>{event.description}</div>
              </div>

              <div>
                <div>DATE AND TIME</div>
                { event.time.min < 10 ?
                  <div>{days[event.date.day % 7]}, {months[event.date.month]} {event.date.day}, {event.time.hour}:0{event.time.min}</div> :
                  <div>{days[event.date.day % 7]}, {months[event.date.month]} {event.date.day}, {event.time.hour}:{event.time.min}</div>
                }
              </div>

              <div>
                <div>{event.organizer_name}</div>
                <div>{event.organizer_description}</div>
              </div>
            </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    )
  }
}

export default EventShow;
