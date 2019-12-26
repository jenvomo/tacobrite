import React from 'react';
import EventIndexItem from "../event/event_index_item";

const MyTicketItem = ({ticket, event}) => {
  return (
    <div>
      <div>{event.title}</div>
      <div>{ticket.qty}</div>
    </div>
  )
}

export default MyTicketItem;