class Message < ApplicationRecord
  belongs_to :user # associations
  belongs_to :chatroom

  # validations
  validates :content, presence: true
end
