class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.integer :beach_id
      t.datetime :date
      t.string :board
      t.string :description

      t.timestamps
    end
  end
end
