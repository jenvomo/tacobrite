import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {

  render () {
    const { title, date, time } = this.props.event;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <li className='index-event'>
        <img className='index-event-img' src={window.images.concert}></img>

        <div className='event-info'>
          <div className='event-fancy-date'>
            <p className='month'>{months[date.month - 1].toUpperCase()}</p>
            <p className='day'>{date.day}</p>
          </div>

          <div className='event-verbage'>
            <p className='title'>{title}</p>
            { time.min < 10 ?
              <p className='date'>{days[date.day % 7]}, {months[date.month - 1]} {date.day}, {time.hour}:0{time.min}</p> : 
              <p className='date'>{days[date.day % 7]}, {months[date.month - 1]} {date.day}, {time.hour}:{time.min}</p>}
            <p className='location'>Location</p>
          </div>
        </div>
      </li>
    )
  }
}

export default withRouter(EventIndexItem);
