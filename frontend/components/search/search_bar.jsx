import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    }
    this.submitSearch = this.submitSearch.bind(this);
    this.update = this.update.bind(this);
  }
  
  submitSearch(e) {
    e.preventDefault();
    this.props.updateSearch(this.state.search);
    this.setState({search: ""});
    this.props.history.push("/events/search");
  }

  update(e) {
    this.setState({search: e.currentTarget.value})
  }
  
  render() {
    return(
      <div className="search-bar-container">
        <img src={window.images.magnifying_glass} />
        <form onSubmit={this.submitSearch}>
          <input className="search-bar" placeholder="search for events" onChange={this.update} value={this.state.search} />
          <button></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);