import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import TicketsModal from './tickets_modal';
import { purchaseTicket } from '../../actions/ticket_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  purchaseTicket: ticket => dispatch(purchaseTicket(ticket)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketsModal));