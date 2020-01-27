import React from 'react';
import EventSearchIndex from '../event/event_search_index';
import EventMap from '../event/event_map';
import Filters from '../filter/filters';

class Search extends React.Component {
  
  render() {
    return (
      <div className="events-search">
        <Filters 
          categories={Object.values(this.props.categories)} 
          updateCategory={this.props.updateCategory}
          fetchCategories={this.props.fetchCategories} /> 
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