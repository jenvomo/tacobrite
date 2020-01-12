class DeleteCategories < ActiveRecord::Migration[5.2]
  def change
    drop_table :categories
    add_column :events, :category, :string
  end
end
