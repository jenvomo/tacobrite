import React from 'react';

class TicketsModal extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('ticket[qty]', 1);
    formData.append('ticket[event_id]', this.props.match.params.eventId);
    formData.append('ticket[user_id]', 2);
    formData.append('ticket[price]', 10.00);
    formData.append('ticket[sale_end_date]', new Date());
    this.props.purchaseTicket(formData).then(ticket => this.props.closeModal());
  }

  render () {
    if (!this.props.modal) return null;
    
    return (
      <div className="tickets-modal-background">
        <div className="tickets-modal-child">
          <div className="tickets-header">
            <h1>Select Tickets</h1>
            <button className="close" onClick={this.props.closeModal}>X</button>
          </div>

          <div className="tickets-options">
            <div className="ticket-item">

            </div>
          </div>

          <div className="tickets-footer">
            <div>QTY:</div>
            <div className="price">FREE</div>
            <button className="tickets-checkout" onClick={this.handleSubmit.bind(this)}>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketsModal;