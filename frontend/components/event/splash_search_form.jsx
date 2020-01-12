import React from 'react';

class SplashSearchForm extends React.Component {


  render () {
    return (
      <div className="index-search-form">
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
      </div>
    )
  }
}

export default SplashSearchForm;