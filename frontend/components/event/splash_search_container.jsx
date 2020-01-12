import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SplashSearchForm from "./splash_search_form";

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashSearchForm));