import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentDidMount () {
    this.props.fetchEvents();
  }

  render () {
    const { events } = this.props;
    return (
      <div>

        <div className='browse-events-header'>
          <div className='city-stuff'>
            <div className='browse-loc'>Browsing in San Francisco, CA</div>
            <div className='city-info'>
                <p className='to-do'>Things to do in</p>
                <p className='city'>San Francisco</p>
                <p className='city-description'>San Francisco has something for everyone. Foodies should enjoy a burrito in the Mission and go to the Farmers Market at the Ferry Building. Shop shoes and boutiques in Hayes Valley. Get outside and stroll Golden Gate Park, say "Hi" to the Bison. See the city from the water by taking a ferry or catamaran under the bridge. See current events below.</p>
            </div>
          </div>

          <img className='event-index-img' src={window.images.sf}></img>
        </div>

        { events ?
          (<ul className='index-events-list'>
            {events.map(event => (
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
