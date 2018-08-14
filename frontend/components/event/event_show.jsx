import React from 'react';

class EventShow extends React.Component {

  componentWillMount() {
    // this.props.fetchEvent()
  }

  render () {
    return (
      <div>
        <div>{this.props.event.title}</div>
      </div>
    )
  }

}

export default EventShow;
