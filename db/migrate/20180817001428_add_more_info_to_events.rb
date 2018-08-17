class AddMoreInfoToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :end_date, :date
    add_column :events, :end_time, :time
    add_column :events, :loc_ln_one, :string
    add_column :events, :loc_ln_two, :string
    add_column :events, :loc_city, :string
    add_column :events, :loc_state, :string
    add_column :events, :loc_zip, :string
    add_column :events, :loc_lat, :float
    add_column :events, :loc_long, :float 
  end
end
