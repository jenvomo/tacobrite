import React from 'react';

const EventTix = (props) => {
    return (
        <div>
            <div className="section-info">
                <p className="section-num">2</p>
                <div className="section-title">Create Tickets</div>
            </div>

            <label className="input-title">Ticket name
                <input 
                    type="text" 
                    placeholder="Early Bird, RSVP..."
                    onChange={props.update('tix_title')}
                    value={props.event.tix_title}></input>
            </label>

            <label className="input-title">Quantity available
                <input type="text" 
                    placeholder="100"
                    onChange={props.update('tix_qty')}
                    value={props.event.tix_qty}></input>
            </label>

            <label className="input-title">Price
                <input 
                    type="text" 
                    placeholder="Free"
                    onChange={props.update('tix_price')}
                    value={props.event.tix_price}></input>
            </label>
            
            <span>Settings</span>

            <label className="input-title">Ticket Description
                <textarea
                    value={props.event.tix_desc}
                    onChange={props.update('tix_desc')}
                    placeholder="Tell your attendees more about this ticket type."></textarea>
            </label>

            <label className="input-title">
                {/* <input type="checkbox"></input>Show ticket description on event page */}
            </label>

            <label className="input-title">Sales channel
                <select defaultValue="Everywhere">
                    <option>Everywhere</option>
                    <option>Online only</option>
                    <option>At the door only</option>
                </select>
            </label>

            <label className="input-title">Fees
                <select defaultValue="Pass fees on">
                    <option>Pass fees on</option>
                    <option>Absorb fees</option>
                </select>
            </label>

            <div className="tix-date-info">
                <label className="input-title">Ticket sales start
                <div className="date">
                        <input
                            type="date"
                            value={props.event.sale_start_date}
                            onChange={props.update('sale_start_date')}></input>

                        <input
                            type="time"
                            value={props.event.sale_start_time}
                            onChange={props.update('sale_start_time')}></input>
                    </div>
                </label>

                <label className="input-title">Ticket sales end
                <div className="date">
                        <input
                            type="date"
                            value={props.event.sale_end_date}
                            onChange={props.update('sale_end_date')}></input>
                        <input
                            type="time"
                            value={props.event.sale_end_time}
                            onChange={props.update('sale_end_time')}></input>
                    </div>
                </label>
            </div>

            <label className="input-title">Tickets allowed per order
                <input 
                    type="integer" 
                    placeholder="1"
                    value={props.event.tix_qty_per_min}
                    onChange={props.update('tix_qty_per_min')}></input>
                <input 
                    type="integer" 
                    placeholder="10"
                    value={props.event.tix_qty_per_max}
                    onChange={props.update('tix_qty_per_max')}></input>

            </label>

        </div>
    );
};

export default EventTix;
