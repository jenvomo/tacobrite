# == Schema Information
#
# Table name: categories
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#

class Category < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :event_categories,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: :EventCategory

  has_many :events,
  through: :event_categories,
  source: :event
end
