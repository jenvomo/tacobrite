import React from 'react';
import EventIndexItem from './event_index_item';
import SplashSearchForm from './splash_search_form';

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

        <SplashSearchForm />

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
