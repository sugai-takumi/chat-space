json.id @tweet.id
json.user_name @tweet.user.name
json.date @tweet.created_at.strftime("%Y/%m/%d %H:%M")
json.content @tweet.content
json.image @tweet.image_url