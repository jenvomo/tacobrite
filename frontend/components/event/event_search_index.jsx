import React from 'react';
import EventSearchIndexItem from './event_search_index_item';

class EventSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(e) {
    this.setState({search: e.currentTarget.value})
  }

  handleSubmit(e) {
    this.props.updateSearch(this.state.search);
  }

  componentWillUnmount() {
    this.props.updateSearch(null);
  }
  
  render() {
    const {events} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            className="search-input" 
            type="text" 
            placeholder="search anything" 
            value={this.state.search} 
            onChange={this.update} />

          <div className="search-location">
            <div>in</div>
            <input className="city-input" placeholder="San Francisco" />
          </div>
          <button></button>
        </form>
        
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