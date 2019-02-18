class Ticket < ApplicationRecord 
    validates :event_id, :user_id, :qty, presence: true
    
    belongs_to :owner,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :event
end