@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :description
    json.date do
      json.month event.date.month
      json.day event.date.day
      json.cwday event.date.cwday
      json.yr event.date.year
      json.date event.date
    end

    json.time do
      json.hour event.time.hour
      json.min event.time.min
    end

    json.loc_ln_one event.loc_ln_one

    json.imageUrl url_for(event.photo)
  end
end
