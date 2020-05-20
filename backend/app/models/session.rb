class Session < ApplicationRecord
    belongs_to :beaches
    validates :description, presence: true
end
