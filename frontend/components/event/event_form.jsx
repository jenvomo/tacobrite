import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchEvents();
  }


  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state)
    this.props.createEvent(this.state);
  }

  render () {
    return (
      <form className="new-event-form" onSubmit={this.handleSubmit}>
        <p className="section-num">1</p>
        <label className="section-title">Event Details</label>
        <label className="input-title">EVENT TITLE
          <input
            type="text"
            placeholder="Give it a short distinct name"
            onChange={this.update('title')}></input>
        </label>

        <label className="input-title">LOCATION
          <input
            type="text"
            placeholder="Search for a venue or address."></input>
        </label>

        <label className="input-title">STARTS
          <input
            type="date"
            onChange={this.update('date')}></input>
        </label>

        <label className="input-title">START TIME
          <input
            type="time"
            onChange={this.update('time')}></input>
        </label>

        <label className="input-title">ENDS
          <input type="date"></input>
        </label>

        <label className="input-title">EVENT IMAGE
          <input></input>
        </label>

        <label className="input-title">EVENT DESCRIPTION
          <textarea
          onChange={this.update('description')}></textarea>
        </label>
      <button>MAKE YOUR EVENT LIVE</button>
      </form>
    )
  }
}

export default EventForm;
