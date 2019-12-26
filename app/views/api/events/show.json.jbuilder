json.extract! @event, :id, :title, :description, :organizer_description, :organizer_name, :loc_ln_one, :tix_title, :tix_title, :tix_desc, :tix_qty, :tix_price, :sale_start_date, :sale_start_time, :sale_end_date, :sale_end_time, :tix_qty_per_min, :tix_qty_per_max
json.lat @event.loc_lat
json.lng @event.loc_long
json.date do
  json.month @event.date.month
  json.day @event.date.day
  json.cwday @event.date.cwday
  json.yr @event.date.year
  json.date @event.date
end
json.end_date do
  json.month @event.end_date.month
  json.day @event.end_date.day
  json.cwday @event.end_date.cwday
  json.yr @event.end_date.year
  json.date @event.end_date
end

json.time do
  json.hour @event.time.hour
  json.min @event.time.min
  json.time @event.time
end

json.end_time do
  json.hour @event.end_time.hour
  json.min @event.end_time.min
  json.time @event.end_time
end

json.imageUrl url_for(@event.photo)
