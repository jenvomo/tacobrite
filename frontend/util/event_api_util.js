export const fetchEvents = (filters) => {
  if (filters.bounds && filters.category) {
    return $.ajax({
      method: 'GET',
      url: `/api/events?category=${filters.category}&northLat=${filters.bounds.northEast.lat}&southLat=${filters.bounds.southWest.lat}&westLng=${filters.bounds.southWest.lng}&eastLng=${filters.bounds.northEast.lng}`
    })
  } else if (filters.bounds) {
    return $.ajax({
      method: 'GET',
      url: `/api/events?northLat=${filters.bounds.northEast.lat}&southLat=${filters.bounds.southWest.lat}&westLng=${filters.bounds.southWest.lng}&eastLng=${filters.bounds.northEast.lng}`
    })
  } else if (filters.category) {
    return $.ajax({
      method: 'GET',
      url: `/api/events?category=${filters.category}`
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
