json.array! @tweets do |tweet|
  json.content tweet.content
  json.image tweet.image.url
  json.date tweet.created_at.strftime("%Y/%m/%d %H:%M")
  json.user_name tweet.user.name
  json.id tweet.id
end