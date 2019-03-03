# == Schema Information
#
# Table name: tickets
#
#  id       :bigint(8)        not null, primary key
#  event_id :integer          not null
#  user_id  :integer          not null
#  qty      :integer          not null
#

class Ticket < ApplicationRecord 
    validates :event_id, :user_id, :qty, presence: true
    
    belongs_to :owner,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :event
end
