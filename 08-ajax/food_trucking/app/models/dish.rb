class Dish < ApplicationRecord
  has_many :likes
  has_many :comments
  mount_uploader :image, ImageUploader
end
