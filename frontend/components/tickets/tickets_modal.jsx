import React from 'react';

class TicketsModal extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit(e) {

  }

  render () {
    if (!this.props.modal) return null;
    
    return (
      <div className="tickets-modal-background">
        <div className="tickets-modal-child">
          Modal here!
          <button onClick={this.props.closeModal}>x</button>
        </div>
      </div>
    );
  }
}

export default TicketsModal;