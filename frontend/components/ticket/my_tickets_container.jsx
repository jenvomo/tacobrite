import { connect } from "react-redux";
import MyTickets from "./my_tickets";
import { fetchTickets } from '../../actions/ticket_actions';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
  return ({
    user: state.entities.users[state.session.id],
    tickets: Object.values(state.entities.tickets),
    events: state.entities.events
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchTickets: userId => dispatch(fetchTickets(userId)),
    fetchEvents: () => dispatch(fetchEvents())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);