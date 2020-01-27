import React from 'react';

class Filters extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  change(category) {
    this.props.updateCategory(category);
    let list = document.getElementsByClassName("cat-option");
    for (let item of list) {
      item.classList.remove("selected");
    }
    if (category == null) {
      document.getElementById("null").classList.add("selected");
    } else {
      document.getElementById(category).classList.add("selected");
    }
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
  
          <div className="cat-header">Category
            <div 
              id="null" 
              className={this.props.selectedCategory ? "cat-option" : "cat-option selected"}
              onClick={() => this.change(null)}>Any category</div>

            {this.props.categories.map(category => (
              <div 
                id={category.id} 
                className={this.props.selectedCategory == category.id ? "cat-option selected" : "cat-option"}
                onClick={() => this.change(category.id)}>{category.title}</div>
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