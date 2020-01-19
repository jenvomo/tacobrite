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
#  tix_title             :string           not null
#  tix_desc              :text
#  tix_qty               :integer          not null
#  tix_price             :float            not null
#  sale_start_date       :date
#  sale_start_time       :time
#  sale_end_date         :date
#  sale_end_time         :time
#  tix_qty_per_min       :integer
#  tix_qty_per_max       :integer
#

class Event < ApplicationRecord
  validates :title, :date, :time, :organizer_id, presence: true

  after_initialize :ensure_photo

  has_one_attached :photo

  belongs_to :organizer,
  foreign_key: :organizer_id,
  class_name: :User

  belongs_to :category

  has_many :tickets


  def ensure_photo
    unless self.photo.attached?
      self.photo.attach(io: File.open("app/assets/images/misc.png"), filename: "misc.png")
    end
  end

  def self.in_bounds(bounds)
    Event
      .where('loc_lat BETWEEN ? AND ?', bounds[:southWest][:lat], bounds[:northEast][:lat])
      .where('loc_long BETWEEN ? AND ?', bounds[:southWest][:lng], bounds[:northEast][:lng])
  end
end
