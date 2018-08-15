json.extract! @user, :email, :id, :first_name, :last_name

json.events do
  @user.events.each do |event|
    json.extract! event, :id, :title, :date, :time
  end
end
