import { Link } from 'react-router-dom';
import React from 'react';

class MyEventItem extends React.Component {

  render () {
    if (!this.props.event) {
      return null;
    }

    const { id, title, date, time } = this.props.event;

    return (
      <div className='my-event'>
        <div className='details'>
          <div>{title}</div>
          { time.min < 10 ?
            <p className='date'>{date.day} {date.month} {date.yr} {time.hour}:0{time.min}</p> :
            <p className='date'>{date.day} {date.month} {date.yr} {time.hour}:{time.min}</p>}

              <button onClick={() => this.props.deleteEvent(id)}>Delete</button>

              <Link to={`/event/${this.props.event.id}/edit`}>Edit</Link>

              <Link to={`/event/${this.props.event.id}`}>View</Link>
        </div>

        <div className='tickets'>
          <div className='tickets-progress-bar'></div>
          <div className='tickets sold'></div>
        </div>
      </div>
    )
  }

}

export default MyEventItem;
