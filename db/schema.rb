# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_18_181414) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.index ["title"], name: "index_categories_on_title", unique: true
  end

  create_table "event_categories", force: :cascade do |t|
    t.integer "event_id", null: false
    t.integer "category_id", null: false
    t.index ["category_id"], name: "index_event_categories_on_category_id"
    t.index ["event_id", "category_id"], name: "index_event_categories_on_event_id_and_category_id", unique: true
    t.index ["event_id"], name: "index_event_categories_on_event_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.date "date", null: false
    t.time "time", null: false
    t.integer "organizer_id", null: false
    t.text "organizer_description"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "organizer_name"
    t.date "end_date"
    t.time "end_time"
    t.string "loc_ln_one"
    t.string "loc_ln_two"
    t.string "loc_city"
    t.string "loc_state"
    t.string "loc_zip"
    t.float "loc_lat"
    t.float "loc_long"
    t.string "tix_title", null: false
    t.text "tix_desc"
    t.integer "tix_qty", null: false
    t.float "tix_price", null: false
    t.date "sale_start_date"
    t.time "sale_start_time"
    t.date "sale_end_date"
    t.time "sale_end_time"
    t.integer "tix_qty_per_min"
    t.integer "tix_qty_per_max"
    t.index ["organizer_id"], name: "index_events_on_organizer_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "event_id", null: false
    t.integer "user_id", null: false
    t.integer "qty", null: false
    t.index ["event_id", "user_id"], name: "index_tickets_on_event_id_and_user_id", unique: true
    t.index ["event_id"], name: "index_tickets_on_event_id"
    t.index ["user_id"], name: "index_tickets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "img_url"
    t.string "session_token", null: false
    t.string "home_loc_ln_one"
    t.string "home_loc_ln_two"
    t.string "home_loc_city"
    t.string "home_loc_state"
    t.string "home_loc_zip"
    t.float "home_loc_lat"
    t.float "home_loc_long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
  end

end
