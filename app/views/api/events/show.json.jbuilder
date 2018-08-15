json.set! @event.id do
  json.extract! @event, :id, :title, :description, :organizer_description, :organizer_name
  json.date do
    json.month @event.date.month
    json.day @event.date.day
  end

  json.time do
    json.hour @event.time.hour
    json.min @event.time.min
  end

  json.imageUrl url_for(@event.photo)

end
