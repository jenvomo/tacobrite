class UpdateCategories < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :description
  end
end
