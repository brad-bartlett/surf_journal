class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.belongs_to :beach
      t.datetime :date
      t.string :board
      t.string :description

      
    end
  end
end
