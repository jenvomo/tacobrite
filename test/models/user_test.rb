# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  img_url         :string
#  session_token   :string           not null
#  home_loc_ln_one :string
#  home_loc_ln_two :string
#  home_loc_city   :string
#  home_loc_state  :string
#  home_loc_zip    :string
#  home_loc_lat    :float
#  home_loc_long   :float
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
