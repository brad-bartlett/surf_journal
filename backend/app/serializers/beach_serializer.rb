class BeachSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :sessions
end
