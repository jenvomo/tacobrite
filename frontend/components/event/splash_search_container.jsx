import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SplashSearchForm from "./splash_search_form";
import { changeCategory } from "../../actions/filter_actions";

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.entities.categories)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeCategory: (cat_id) => dispatch(changeCategory(cat_id))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashSearchForm));