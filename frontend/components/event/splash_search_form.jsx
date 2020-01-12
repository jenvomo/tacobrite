import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("/events/search");
  }

  render() {
    return (
      <form className="index-search-form" onSubmit={this.handleSubmit}>
        <div>
          <div className="want-em">I want some tacos</div>
          <div className="pick-em">
            <select className="pick-em-select">
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This weekend</option>
              <option>This week</option>
              <option>Next week</option>
              <option>This month</option>
              <option>Next month</option>
            </select>
          </div>
        </div>
        <label className="field">In
              <input type="text" placeholder="San Francisco"></input>
        </label>
        <label className="field">And I'm in the mood for
              <input type="text" placeholder="Anything"></input>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

export default withRouter(SplashSearchForm);