import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { purchaseTicket } from '../../actions/ticket_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId]
  }
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  purchaseTicket: ticket => dispatch(purchaseTicket(ticket)),
  openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
