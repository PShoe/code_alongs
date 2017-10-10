class Tip < ApplicationRecord
  has_many :comments
  has_many :taggings
  has_many :tags, through: :taggings

  def tags_list
    tag_list = []
    self.tags.each do |tag|
      tag_list.push(tag.name)
    end
    tag_list = tag_list.join(", ")
    return tag_list
  end

end
