import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import TicketsModal from './tickets_modal';

const mapStateToProps = state => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketsModal);