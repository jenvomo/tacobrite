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