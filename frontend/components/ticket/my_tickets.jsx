import React from 'react';
import MyTicketItem from './my_ticket_item';

class MyTickets extends React.Component {
  
  componentDidMount() {
    this.props.fetchTickets(this.props.user.id).then(() => {
      this.props.fetchEvents();
    })
  }

  render() {
    if (this.props.events && this.props.tickets) {
      // return (
      //   <div className="my-tickets">
      //     <div className="user-name">Hey, {this.props.user.first_name}!</div>
      //     {this.props.tickets.map(ticket => {
      //       return (
      //         <MyTicketItem 
      //           key={ticket.id}
      //           ticket={ticket}
      //           event={this.props.events[ticket.event_id]} />
      //       )
      //     })}
      //   </div>
      // )
      return <div>it worked!</div>
    } else {
      return <div>no event</div>
    }
  }
}

export default MyTickets;