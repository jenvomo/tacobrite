import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {

  render () {
    const { title, date, time } = this.props.event;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <li>
        <p>{months[date.month - 1].toUpperCase()}</p>
        <p>{date.day}</p>
        <p>{title}</p>
        <p>{days[date.day % 7]}, {months[date.month - 1]} {date.day}, {time.hour}:{time.min}</p>
      </li>
    )
  }
}

export default withRouter(EventIndexItem);
