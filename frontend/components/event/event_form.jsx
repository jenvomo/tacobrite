import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      organizer_name: '',
      organizer_description: '',
      photoFile: null,
      imageUrl: '',
      submit: false
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
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event[title]', this.state.title);
    formData.append('event[description]', this.state.description);
    formData.append('event[date]', this.state.date);
    formData.append('event[time]', this.state.time);
    if (this.state.photoFile) {
      formData.append('event[photo]', this.state.photoFile);
    }
    formData.append('event[organizer_name]', this.state.organizer_name);
    formData.append('event[organizer_description]', this.state.organizer_description);
    this.props.createEvent(formData);
    this.setState({submit: true});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    };

  }

  render () {
    const preview = this.state.imageUrl ? <img className="preview" src={this.state.imageUrl} /> : null;
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

            <label className="event-img">EVENT IMAGE
              <div className="img-input-container">

              {preview ?
                (<div className="border-container">
                  <input
                    type="file"
                    onChange={this.handleFile}></input>
                  {preview}
                </div>)
               : (<div className="border-container">
                   ADD EVENT IMAGE
                   <div className="img-upload-desc">
                     Choose a compelling image that brings your event to life.</div>
                   <input
                     type="file"
                     onChange={this.handleFile}></input>
                 </div>)}

              </div>
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
          { this.state.submit ?
          <Redirect to="/events" /> :
          null}
        </div>
      </div>
    )
  }
}

export default EventForm;
