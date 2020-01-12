import React from 'react';

class CategoryEventIndex extends React.Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.update("category", null)}>All</div>
        <div onClick={() => this.props.update("category", "Beef")}>Beef</div>
        <div onClick={() => this.props.update("category", "Breakfast")}>Breakfast</div>
        <div onClick={() => this.props.update("category", "Chicken")}>Chicken</div>
        <div onClick={() => this.props.update("category", "Fish")}>Fish</div>
        <div onClick={() => this.props.update("category", "Pork")}>Pork</div>
        <div onClick={() => this.props.update("category", "Vegan")}>Vegan</div>
        <div onClick={() => this.props.update("category", "Vegetarian")}>Vegetarian</div>
      </div>
    )
  }
}

export default CategoryEventIndex;