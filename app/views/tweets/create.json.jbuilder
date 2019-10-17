json.id @tweet.id
json.user_name @tweet.user.name
json.date @tweet.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.content @tweet.content
json.image @tweet.image_url