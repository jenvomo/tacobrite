class DeleteEventCategories < ActiveRecord::Migration[5.2]
  def change
    drop_table :event_categories
  end
end
