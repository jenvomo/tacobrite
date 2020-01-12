import React from 'react';

class CategoryEventIndex extends React.Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.updateFilters("category", null)}>All</div>
        <div onClick={() => this.props.updateFilters("category", "Beef")}>Beef</div>
        <div onClick={() => this.props.updateFilters("category", "Breakfast")}>Breakfast</div>
        <div onClick={() => this.props.updateFilters("category", "Chicken")}>Chicken</div>
        <div onClick={() => this.props.updateFilters("category", "Fish")}>Fish</div>
        <div onClick={() => this.props.updateFilters("category", "Pork")}>Pork</div>
        <div onClick={() => this.props.updateFilters("category", "Vegan")}>Vegan</div>
        <div onClick={() => this.props.updateFilters("category", "Vegitarian")}>Vegitarian</div>
      </div>
    )
  }
}

export default CategoryEventIndex;