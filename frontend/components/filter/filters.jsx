import React from 'react';

class Filters extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  selectTimeFilter(time) {
    let list = document.getElementsByClassName("time-option");
    for (let item of list) {
      item.classList.remove("selected");
    }
    if (time == null) {
      document.getElementById("null").classList.add("selected");
    } else {
      document.getElementById(time).classList.add("selected");
    }
  }

  selectPriceFilter(price) {
    let list = document.getElementsByClassName("price-option");
    for (let item of list) {
      item.classList.remove("selected");
    }
    if (price == null) {
      document.getElementById("null").classList.add("selected");
    } else {
      document.getElementById(price).classList.add("selected");
    }
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
            <div id="today" 
              className="time-option"
              onClick={() => this.selectFilter("today")}>Today</div>
            <div id="weekend" 
              className="time-option"
              onClick={() => this.selectFilter("weekend")}>This weekend</div>
            <div id="month" 
              className="time-option selected"
              onClick={() => this.selectFilter("month")}>Next Month</div>
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
            <div id="free"
              className="price-option selected"
              onClick={() => this.selectPriceFilter("free")}>Free</div>
            <div id="paid"
              className="price-option"
              onClick={() => this.selectPriceFilter("paid")}>Paid</div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Filters;