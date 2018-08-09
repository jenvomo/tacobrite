class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.integer :organizer_id, null: false
      t.text :organizer_description
      t.string :img_url

      t.timestamps
    end

    add_index :events, :organizer_id
  end
end
