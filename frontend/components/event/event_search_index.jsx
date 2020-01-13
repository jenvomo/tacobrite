import React from 'react';
import EventSearchIndexItem from './event_search_index_item';

class EventSearchIndex extends React.Component {
  
  render() {
    const {events} = this.props;
    return (
      <div>
        <header>
          <input className="search-input" type="text" placeholder="search anything" />

          <div className="search-location">
            <div>in</div>
            <input className="city-input" placeholder="San Francisco" />
          </div>
        </header>
        
        <ul className='search-events-list'>
        {events ?
          (Object.values(events).map(event => (
            <EventSearchIndexItem key={event.id} event={event} />)))
            : (
              null
            )
         }

        </ul>
      </div>
    )
  }
}

export default EventSearchIndex;