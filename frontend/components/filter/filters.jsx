import React from 'react';

class Filters extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  
  render() {
    if (this.props.categories) {
      return (
        <div className="filters">
          <div className="title">Filters</div>
          <div className="cat-header">Date
            <div>Today</div>
            <div>This weekend</div>
            <div>Next Month</div>
          </div>
            <div>More dates</div>
  
          <div className="cat-header">Category
          <div onClick={() => this.props.updateCategory(null)}>Any category</div>
            {this.props.categories.map(category => (
              <div onClick={() => this.props.updateCategory(category.id)}>{category.title}</div>
              ))}
          </div>
  
          <div className="cat-header">Price
            <div>Free</div>
            <div>Paid</div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Filters;