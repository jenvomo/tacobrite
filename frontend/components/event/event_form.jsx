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
      <div className="new-event-page">
        <div className="new-event-titleblock">
          <label>Create an Event</label>
          <button
            onClick={this.handleSubmit}
            className="publish"
            >Publish</button>
        </div>
        <div className="event-form-options"></div>
        <div className="new-event-container">



          <form className="new-event-form" onSubmit={this.handleSubmit}>

            <div className="section-info">
              <p className="section-num">1</p>
              <p className="section-title">Event Details</p>
            </div>
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

              <input
                type="time"
                onChange={this.update('time')}></input>
            </label>

            <label className="input-title">ENDS
              <input type="date"></input>
              <input type="time"></input>
            </label>

            <label className="input-title">EVENT IMAGE
              <input></input>
            </label>

            <label className="input-title">EVENT DESCRIPTION
              <textarea
                onChange={this.update('description')}></textarea>
            </label>

            <label className="input-title">ORGANIZER NAME
              <input
                onChange={this.update('organizer_name')}></input>
            </label>

            <label className="input-title">ORGANIZER DESCRIPTION
              <textarea
                onChange={this.update('organizer_description')}></textarea>
            </label>
            <button>MAKE YOUR EVENT LIVE</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EventForm;
