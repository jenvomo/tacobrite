class CreateCategoriesJoinsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :categories_joins do |t|
      t.integer :event_id, null: false
      t.integer :category_id, null: false
    end

    add_index :categories_joins, [:event_id, :category_id], unique: true
    add_index :categories_joins, :event_id
    add_index :categories_joins, :category_id
  end
end
