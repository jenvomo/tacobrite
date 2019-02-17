# == Schema Information
#
# Table name: events
#
#  id                    :bigint(8)        not null, primary key
#  title                 :string           not null
#  description           :text             not null
#  date                  :date             not null
#  time                  :time             not null
#  organizer_id          :integer          not null
#  organizer_description :text
#  img_url               :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  organizer_name        :string
#  end_date              :date
#  end_time              :time
#  loc_ln_one            :string
#  loc_ln_two            :string
#  loc_city              :string
#  loc_state             :string
#  loc_zip               :string
#  loc_lat               :float
#  loc_long              :float
#

class Event < ApplicationRecord
  validates :title, :date, :time, :organizer_id, presence: true

  after_initialize :ensure_photo

  has_one_attached :photo

  belongs_to :organizer,
  foreign_key: :organizer_id,
  class_name: :User

  has_one :event_category,
  foreign_key: :event_id,
  class_name: :EventCategory

  has_one :category,
  through: :event_category,
  source: :category

  has_many :tickets


  def ensure_photo
    unless self.photo.attached?
      self.photo.attach(io: File.open("app/assets/images/SCORE.jpg"), filename: "SCORE.jpg")
    end
  end
end
