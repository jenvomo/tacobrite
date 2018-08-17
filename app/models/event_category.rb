# == Schema Information
#
# Table name: event_categories
#
#  id          :bigint(8)        not null, primary key
#  event_id    :integer          not null
#  category_id :integer          not null
#

class EventCategory < ApplicationRecord

  belongs_to :category,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: :Category

  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event
end
