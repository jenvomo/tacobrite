class UpdateEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :price
    remove_column :tickets, :sale_end_date

    add_column :events, :tix_title, :string, null: false
    add_column :events, :tix_desc, :text
    add_column :events, :tix_qty, :integer, null: false
    add_column :events, :tix_price, :float, null: false
    add_column :events, :sale_start_date, :date
    add_column :events, :sale_start_time, :time
    add_column :events, :sale_end_date, :date
    add_column :events, :sale_end_time, :time
    add_column :events, :tix_qty_per_min, :integer
    add_column :events, :tix_qty_per_max, :integer
  end
end
