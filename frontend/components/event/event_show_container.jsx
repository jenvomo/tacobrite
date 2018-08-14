import { connect } from 'react-redux';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => ({
  event: ownProps.match.params.eventId
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
