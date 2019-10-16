class Group < ApplicationRecord
  has_many :group_users
  has_many :tweets
  has_many :users, through: :group_users

  validates :name, presence: true

  def show_last_tweet
    if (last_tweet = tweets.last).present?
      last_tweet.content? ? last_tweet.content : '画像が投稿されています'
    else
      'まだツイートはありません。'
    end
  end
end