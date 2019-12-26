import React from 'react';
import EventSearchIndexItem from './event_search_index_item';

class EventSearchIndex extends React.Component {
  
  render() {
    const {events} = this.props;
    return (
      <div>
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