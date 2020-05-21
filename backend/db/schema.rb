ActiveRecord::Schema.define(version: 2020_05_19_061759) do

  create_table "beaches", force: :cascade do |t|
    t.string "name"
  end

  create_table "sessions", force: :cascade do |t|
    t.integer "beach_id"
    t.datetime "date"
    t.string "board"
    t.string "description"
  end

end
