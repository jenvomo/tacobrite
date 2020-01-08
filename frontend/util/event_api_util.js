export const fetchEvents = (bounds) => {
  if (bounds) {
    return $.ajax({
      method: 'GET',
      url: `/api/events?northLat=${bounds.northEast.lat}&southLat=${bounds.southWest.lat}&westLng=${bounds.southWest.lng}&eastLng=${bounds.northEast.lng}`
    })
  } else {
    return $.ajax({
      method: 'GET',
      url: `/api/events`
    })
  }
};

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: event,
    contentType: false,
    processData: false
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: event,
    contentType: false,
    processData: false
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  })
);
