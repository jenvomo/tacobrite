import React from 'react';
import EventSearchIndex from '../event/event_search_index';
import EventMap from '../event/event_map';

class Search extends React.Component {
  
  render() {
    return (
      <div className="events-search">
        <div className="filters"></div>
        <EventSearchIndex 
          events={this.props.events} 
          updateSearch={this.props.updateSearch} 
          search={this.props.search} />
        <EventMap 
          events={this.props.events} 
          fetchEvents={this.props.fetchEvents} 
          updateBounds={this.props.updateBounds} />
      </div>
    )
  }
}

export default Search;