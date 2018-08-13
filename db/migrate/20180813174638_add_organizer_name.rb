class AddOrganizerName < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :organizer_name, :string
  end
end
