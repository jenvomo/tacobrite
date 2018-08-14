import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      photoFile: null
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
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

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  render () {
    console.log(this.state);
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
              <div className="section-title">Event Details</div>
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

            <div className="event-date-info">
              <label className="input-title">STARTS
                <div className="date">
                  <input
                    type="date"
                    onChange={this.update('date')}></input>

                  <input
                    type="time"
                    onChange={this.update('time')}></input>
                </div>
              </label>

              <label className="input-title">ENDS
                <div className="date">
                  <input type="date"></input>
                  <input type="time"></input>
                </div>
              </label>
            </div>

            <label className="input-title">EVENT IMAGE
              <input
                type="file"
                onChange={this.handleFile}></input>
            </label>

            <label className="input-title">EVENT DESCRIPTION
              <textarea
                onChange={this.update('description')}></textarea>
            </label>

            <label className="input-title">ORGANIZER NAME
              <input
                onChange={this.update('organizer_name')}
                placeholder="Who's organizing this event?"></input>
            </label>

            <label className="input-title">ORGANIZER DESCRIPTION
              <textarea
                onChange={this.update('organizer_description')}></textarea>
            </label>
          </form>
        </div>

        <div className="complete-create">
          <p className="almost-msg">Nice job! You're almost done.</p>
          <button onClick={this.handleSubmit}>MAKE YOUR EVENT LIVE</button>
        </div>
      </div>
    )
  }
}

export default EventForm;
