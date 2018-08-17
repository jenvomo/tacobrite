class CreateEventCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :event_categories do |t|
      t.integer :event_id, null: false
      t.integer :category_id, null: false
    end

    add_index :event_categories, [:event_id, :category_id], unique: true
    add_index :event_categories, :event_id
    add_index :event_categories, :category_id
  end
end
