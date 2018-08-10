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
        <div>Browsing in San Francisco, CA</div>
        { events ?
          (<ul>
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
