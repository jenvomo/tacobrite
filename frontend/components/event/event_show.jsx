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
      <div>
        { event ? (
          <div>
            <div>
              <div className="event-show-header">
                <img src={event.imageUrl} />
                <div>{event.title}</div>
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
