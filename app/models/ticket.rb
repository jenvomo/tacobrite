class Ticket < ApplicationRecord 
    validates :event_id, :user_id, :price, :qty, :sale_end_date, presence: true
    
    belongs_to :owner,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :event
end