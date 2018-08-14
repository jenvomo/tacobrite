# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create({email: 'demo@demo.com', password: 'password', first_name: 'demo', last_name: 'demo'})
users = User.create({email: 'haseeb@aa.io', password: 'usersarestupid', first_name: 'haseeb', last_name: 'local celebrity'})

Event.destroy_all
event1 = Event.create({ title: 'aA Happy Hour', description: 'Come network and have a brewski', date: Date.today, time: Time.now, organizer_id: 2})
event2 = Event.create({ title: 'free lunch', description: 'if you finish your full stack by this friday', date: Date.new(2018,8,9), time: Time.now, organizer_id: 2})
event3 = Event.create({ title: 'bagel day', description: 'Bagels for the current cohort survivors', date: (Date.today + 7), time: Time.now, organizer_id: 2})

event1.photo.attach(io: File.open("/Users/JenniferKennedyHome/Documents/SCORE.jpg"), filename: "SCORE.jpg")
event2.photo.attach(io: File.open("/Users/JenniferKennedyHome/Documents/SCORE.jpg"), filename: "SCORE.jpg")
event3.photo.attach(io: File.open("/Users/JenniferKennedyHome/Documents/SCORE.jpg"), filename: "SCORE.jpg")
