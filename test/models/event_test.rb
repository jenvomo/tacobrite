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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
