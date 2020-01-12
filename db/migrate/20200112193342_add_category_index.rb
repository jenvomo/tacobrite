class AddCategoryIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :events, :category
  end
end
