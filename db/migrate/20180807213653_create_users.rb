class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest, null: false
      t.string :img_url
      t.string :session_token, null: false, unique: true
      t.string :home_loc_ln_one
      t.string :home_loc_ln_two
      t.string :home_loc_city
      t.string :home_loc_state
      t.string :home_loc_zip
      t.float :home_loc_lat
      t.float :home_loc_long

      t.timestamps
    end

    add_index :users, :email
  end
end
