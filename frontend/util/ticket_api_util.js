export const fetchTickets = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/tickets`,
        contentType: false,
        processData: false
    });
};

export const purchaseTicket = ticket => {
    return $.ajax({
        method: 'POST',
        url: '/api/tickets',
        data: ticket,
        contentType: false,
        processData: false
    })
};

export const deleteTicket = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tickets/${id}`
    })
);