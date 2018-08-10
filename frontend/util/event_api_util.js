export const fetchEvents = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/events'
  });
};

export const fetchEvent = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/events/${id}`
  });
};
