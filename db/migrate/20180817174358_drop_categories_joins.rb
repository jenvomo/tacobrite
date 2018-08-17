class DropCategoriesJoins < ActiveRecord::Migration[5.2]
  def change
    drop_table :categories_joins
  end
end
