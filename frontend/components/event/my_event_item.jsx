import { Link } from 'react-router-dom';
import React from 'react';

class MyEventItem extends React.Component {

  render () {
    const { id, title, date, time } = this.props.event;
    return (
      <div>
        <div>{this.props.event.title}</div>
        { time.min < 10 ?
          <p className='date'>{date.day} {months[date.month - 1]} {date.yr} {time.hour}:0{time.min}</p> :
          <p className='date'>{date.day} {months[date.month - 1]} {date.yr} {time.hour}:{time.min}</p>}

          <div>
            <img></img>
            <Link to={`/api/event/${this.props.event.id}`} />
          </div>

          <div>
            <img></img>
            <Link to={`/event/${this.props.event.id}`} />
          </div>
      </div>
    )
  }

}
