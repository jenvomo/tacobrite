import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class EventSearchIndexItem extends React.Component {

  render() {
    const { id, title, date, time, imageUrl, loc_ln_one } = this.props.event;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <li className='search-index-event'>
        <Link to={`/event/${id}`}>
          <img className='index-event-img' src={imageUrl}></img>

          <div className='event-info'>
            <div className='event-verbage'>
              {time.min < 10 ?
                <p className='date'>{days[date.cwday]}, {months[date.month - 1]} {date.day}, {time.hour}:0{time.min}</p> :
                <p className='date'>{days[date.cwday]}, {months[date.month - 1]} {date.day}, {time.hour}:{time.min}</p>}
                <p className='title'>{title}</p>
              <p className='location'>{loc_ln_one}</p>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default withRouter(EventSearchIndexItem);
