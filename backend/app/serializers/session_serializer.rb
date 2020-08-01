class SessionSerializer < ActiveModel::Serializer
  attributes :id, :date, :board, :description
  belongs_to :beach
end
