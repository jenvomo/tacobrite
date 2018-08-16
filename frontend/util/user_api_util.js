export const fetchUsersEvents = () => (
  $.ajax({
    method: 'GET',
    url: '/api/myevents'
  })
);
