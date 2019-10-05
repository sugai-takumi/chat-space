# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...





## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false, unique: true, index: true|
|email|integer|null: false, unique: true|
|pass|integer|null: false|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :tweets



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group|string|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :tweets



## tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|tweet|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user