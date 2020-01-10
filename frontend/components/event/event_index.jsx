import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentDidMount () {
    this.props.fetchEvents();
  }

  render () {
    const { events } = this.props;
    return (
      <div className="event-index">
        <header className="background">
          <div className="background-img-container">
            <img className="background-img" src={window.images.splash} />
          </div>
          <div className="lower-background"></div>
        </header>

        <div className='browse-events-header'>
          <img className='event-index-img' src={window.images.splash}></img>
          <div className="spalsh-words">
            <div className="splash-verbiage-open">Let's</div>
            <div className="splash-verbiage-close">TACO bout it</div>
          </div>

        <div className="index-search-form"> 
          <div>I want some tacos</div>
          <select>
            <option>Today</option>
            <option>Tomorrow</option>
            <option>This weekend</option>
            <option>This week</option>
            <option>Next week</option>
            <option>This month</option>
            <option>Next month</option>
          </select>
          <label>in
            <input type="text" placeholder="San Francisco"></input>
          </label>
          <label>and I'm in the mood for
            <input type="text" placeholder="Anything"></input>
          </label>
        </div>
        </div>

        { events ?
          (<ul className='index-events-list'>
            {Object.values(events).map(event => (
              <EventIndexItem key={event.id} event={event} />
            ))}
          </ul>) : (
            <p>event index</p>
          )
          
        }
      </div>
    )
  }
}

export default EventIndex;
