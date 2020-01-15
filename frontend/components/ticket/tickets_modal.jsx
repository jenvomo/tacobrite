import React from 'react';

class TicketsModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      qty: 1
    }
    this.updateQty = this.updateQty.bind(this);
  }

  updateQty(e) {
    this.setState({qty: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('ticket[qty]', 1);
    formData.append('ticket[event_id]', this.props.match.params.eventId);
    formData.append('ticket[price]', this.props.event.tix_price);
    this.props.purchaseTicket(formData).then(railsitem => this.props.closeModal());
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
              <div className="ticket-info">
                <div className="ticket-title">{this.props.event.tix_title}</div>
                <div className="ticket-price">{this.props.event.tix_price == 0 ? 'Free' : `\$${this.props.event.tix_price}.00`}</div>
              </div>

              <select onChange={this.updateQty} defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <div className="tickets-footer">
            <div>QTY: {this.state.qty}</div>
            <div className="price">${this.props.event.tix_price * this.state.qty}.00</div>
            <button className="tickets-checkout" onClick={this.handleSubmit.bind(this)}>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketsModal;