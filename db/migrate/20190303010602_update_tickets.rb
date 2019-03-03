class UpdateTickets < ActiveRecord::Migration[5.2]
  def change
    remove_index :tickets, [:event_id, :user_id]
  end
end
