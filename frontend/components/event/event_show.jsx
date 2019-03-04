import React from 'react';
import TicketModalContainer from '../tickets/tickets_modal_container';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    this.props.fetchEvent(eventId);
  }

  render () {
    const { event } = this.props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // const { date, time, title, description, imageUrl } = this.props.event;
    return (
      <div className="event-show">
        <TicketModalContainer />
        { event ? (
          <div>
            <header className="background">
            <div className="background-img-container">
              <img className="background-img" src={event.imageUrl} />

            </div>
              <div className="lower-background"></div>
            </header>
            <div className="event-container">
              <div className="event-show-header">
                <img src={event.imageUrl} />

                <div className="header-info">
                  <div className='event-fancy-date'>
                    <p className='month'>{months[event.date.month - 1].toUpperCase()}</p>
                    <p className='day'>{event.date.day}</p>
                  </div>

                  <div className="title">{event.title}</div>

                  <div className="loc">{event.loc_ln_one}</div>

                  <div className="price">${event.tix_price}.00</div>
                </div>
              </div>

              <div className="tickets-bar">
                <div></div>
                <button onClick={this.props.openModal}>Tickets</button>
              </div>

              <div className="event-content">
                <div className="event-desc">
                  <div className="desc-header">Description</div>
                  <p className="desc">{event.description}</p>
                </div>

              <div className="timing">
                <div className="header">Date and Time</div>
                { event.time.min < 10 ?
                  <div className="date">{days[event.date.cwday -1]}, {months[event.date.month - 1]} {event.date.day}, {event.time.hour}:0{event.time.min}</div> :
                  <div className="date">{days[event.date.cwday -1]}, {months[event.date.month - 1]} {event.date.day}, {event.time.hour}:{event.time.min}</div>
                }
              </div>
            </div>

              <div className="organizer">
                <div className="name">{event.organizer_name}</div>
                <div className="info">Organizer of {event.title}</div>
                <div className="desc">{event.organizer_description}</div>
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
