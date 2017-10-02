class Comment < ActiveRecord::Base
  belongs_to :user
  # def user_email
  #   if self.user_id
  #   User.find(self.user_id).email
  #   else
  #   ''
  #   end
  # end
end
