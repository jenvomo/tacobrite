import React from 'react';

class CategoryEventIndex extends React.Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.updateFilters("category", null)}>All</div>
        <div onClick={() => this.props.updateFilters("category", 13)}>Breakfast</div>
      </div>
    )
  }
}

export default CategoryEventIndex;