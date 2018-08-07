class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :img_url
      t.string :session_token
      t.string :home_loc_ln_one
      t.string :home_loc_ln_two
      t.string :home_loc_city
      t.string :home_loc_state
      t.string :home_loc_zip
      t.float :home_loc_lat
      t.float :home_loc_long

      t.timestamps
    end
  end
end
