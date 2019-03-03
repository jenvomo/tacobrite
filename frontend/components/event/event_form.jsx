import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import EventTix from './event_tix';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      end_date: '',
      end_time: '',
      loc_ln_one: '',
      organizer_name: '',
      organizer_description: '',
      photoFile: null,
      imageUrl: '',
      tix_title: '',
      tix_qty: '',
      tix_price: '',
      tix_desc: '',
      sale_start_date: '',
      sale_start_time: '',
      sale_end_date: '',
      sale_end_time: '',
      tix_qty_per_min: 1,
      tix_qty_per_max: '',
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount () {
    if (this.props.formType === 'edit') {
      this.props.fetchEvent(this.props.eventId).then(() => {
        const { event } = this.props;
        this.setState(event);
        this.setState({id: event.id});
        this.setState({time: event.time.time.slice(-13, -8)});
        this.setState({end_time: event.end_time.time.slice(-13, -8)});
        this.setState({date: event.date.date});
        this.setState({end_date: event.end_date.date});
        this.setState({sale_start_time: event.sale_start_time.slice(-13, -8)});
        this.setState({sale_start_date: event.sale_start_date.date});
        this.setState({sale_end_date: event.sale_end_date.date});
        this.setState({sale_end_time: event.sale_end_time.slice(-13, -8)});

          // if ((event.date.month < 10) && (event.date.day < 10)) {
          //   this.setState({
          //     date: `${event.date.yr}-0${event.date.month}-0${event.date.day}`
          //   })
          // } else if ((event.date.month < 10) && (event.date.day >= 10)){
          //   this.setState({
          //     date: `${event.date.yr}-0${event.date.month}-${event.date.day}`
          //   })
          // } else if ((event.date.month >= 10) && (event.date.day < 10)){
          //   this.setState({
          //     date: `${event.date.yr}-${event.date.month}-0${event.date.day}`
          //   })
          // } else {
          //   this.setState({
          //     date: `${event.date.yr}-${event.date.month}-${event.date.day}`
          //   })
          // }

      })
    }
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
    formData.append('event[end_date]', this.state.end_date);
    formData.append('event[end_time]', this.state.end_time);
    formData.append('event[loc_ln_one]', this.state.loc_ln_one);
    if (this.state.photoFile) {
      formData.append('event[photo]', this.state.photoFile);
    }
    formData.append('event[organizer_name]', this.state.organizer_name);
    formData.append('event[organizer_description]', this.state.organizer_description);
    formData.append('event[tix_title]', this.state.tix_title);
    formData.append('event[tix_qty]', this.state.tix_qty);
    formData.append('event[tix_price]', this.state.tix_price);
    formData.append('event[tix_desc]', this.state.tix_desc);
    formData.append('event[sale_start_date]', this.state.sale_start_date);
    formData.append('event[sale_start_time]', this.state.sale_start_time);
    formData.append('event[sale_end_date]', this.state.sale_end_date);
    formData.append('event[sale_end_time]', this.state.sale_end_time);
    formData.append('event[tix_qty_per_min]', this.state.tix_qty_per_min);
    formData.append('event[tix_qty_per_max]', this.state.tix_qty_per_max);
    
    if (this.props.formType === 'edit') {
      formData.append('event[id]', this.state.id);

    }

    this.props.processForm(formData).then(
      railsitem => {
        this.props.history.push(`/event/${railsitem.event.id}`);
      }
    );
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
            <label className="input-title">Event Title
              <input
                type="text"
                value={this.state.title}
                placeholder="Give it a short distinct name"
                onChange={this.update('title')}></input>
            </label>

            <label className="input-title">Location
              <input
                type="text"
                value={this.state.loc_ln_one}
                placeholder="Search for a venue or address."
                onChange={this.update('loc_ln_one')}></input>
            </label>

            <div className="event-date-info">
              <label className="input-title">Starts
                <div className="date">
                  <input
                    type="date"
                    value={this.state.date}
                    onChange={this.update('date')}></input>

                  <input
                    type="time"
                    value={this.state.time}
                    onChange={this.update('time')}></input>
                </div>
              </label>

              <label className="input-title">Ends
                <div className="date">
                  <input
                    type="date"
                    value={this.state.end_date}
                    onChange={this.update('end_date')}></input>
                  <input
                    type="time"
                    value={this.state.end_time}
                    onChange={this.update('end_time')}></input>
                </div>
              </label>
            </div>

            <label className="event-img">Event Image
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

            <label className="input-title">Event Description
              <textarea
              value={this.state.description}
                onChange={this.update('description')}></textarea>
            </label>

            <label className="input-title">Organizer Name
              <input
                value={this.state.organizer_name}
                onChange={this.update('organizer_name')}
                placeholder="Who's organizing this event?"></input>
            </label>

            <label className="input-title">Organizer Description
              <textarea
                value={this.state.organizer_description}
                onChange={this.update('organizer_description')}></textarea>
            </label>

            <EventTix update={this.update} event={this.state} />
          </form>
        </div>


        <div className="complete-create">
          <p className="almost-msg">Nice job! You're almost done.</p>
          <p className='login-errors'>{this.props.errors.join(', ')}</p>
          <button onClick={this.handleSubmit}>MAKE YOUR EVENT LIVE</button>
        </div>

      </div>
    )
  }
}

export default EventForm;
