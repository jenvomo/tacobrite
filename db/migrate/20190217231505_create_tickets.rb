class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.float :price, null: false
      t.integer :qty, null: false
      t.date :sale_end_date, null: false
    end

    add_index :tickets, [:event_id, :user_id], unique: true
    add_index :tickets, :event_id
    add_index :tickets, :user_id
  end
end
