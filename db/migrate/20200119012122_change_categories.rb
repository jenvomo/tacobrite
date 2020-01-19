class ChangeCategories < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :category
    add_column :events, :category_id, :integer
    add_index :events, :category_id

    create_table :categories do |t|
      t.string :title, null: false
    end
  end
end
