import React from 'react';
import EventSearchIndex from '../event/event_search_index';
import EventMap from '../event/event_map';

class Search extends React.Component {
  
  render() {
    return (
      <div className="events-search">
        <div>in</div> 
        <div>San Francisco</div>
        <div className="events-search-results">
          <EventSearchIndex events={this.props.events} />
          <EventMap 
            events={this.props.events} 
            fetchEvents={this.props.fetchEvents} 
            updateBounds={this.props.updateBounds} />
        </div>
      </div>
    )
  }
}

export default Search;