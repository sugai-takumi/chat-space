require 'rails_helper'

RSpec.describe Tweet, type: :model do
  describe '#create' do
    context 'can save' do
      it 'is valid with content' do
        expect(build(:tweet, image: nil)).to be_valid
      end

      it 'is valid with image' do
        expect(build(:tweet, content: nil)).to be_valid
      end

      it 'is valid with content and image' do
        expect(build(:tweet)).to be_valid
      end
    end

    context 'can not save' do
      it 'is invalid without content and image' do
        tweet = build(:tweet, content: nil, image: nil)
        tweet.valid?
        expect(tweet.errors[:content]).to include('を入力してください')
      end

      it 'is invalid without group_id' do
        tweet = build(:tweet, group_id: nil)
        tweet.valid?
        expect(tweet.errors[:group]).to include('を入力してください')
      end

      it 'is invalid without user_id' do
        tweet = build(:tweet, user_id: nil)
        tweet.valid?
        expect(tweet.errors[:user]).to include('を入力してください')
      end
    end
  end
end