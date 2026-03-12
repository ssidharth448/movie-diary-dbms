CREATE TABLE Users (
user_id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) UNIQUE,
email VARCHAR(100) UNIQUE,
password_hash VARCHAR(255),
bio TEXT,
profile_pic_url TEXT,
joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Movies (
movie_id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
release_year INT,
runtime_mins INT,
language VARCHAR(50),
country VARCHAR(50),
poster_url TEXT,
synopsis TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE People (
person_id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
dob DATE,
gender VARCHAR(20),
bio TEXT
);

CREATE TABLE Movie_People (
movie_id INT,
person_id INT,
job_role VARCHAR(50),
character_name VARCHAR(255),
credit_order INT,
PRIMARY KEY(movie_id,person_id,job_role),
FOREIGN KEY(movie_id) REFERENCES Movies(movie_id),
FOREIGN KEY(person_id) REFERENCES People(person_id)
);

CREATE TABLE Diary_Entries (
entry_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
movie_id INT,
watched_date DATE,
is_rewatch BOOLEAN,
diary_note TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(user_id) REFERENCES Users(user_id),
FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
);

CREATE TABLE Reviews (
review_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
movie_id INT,
rating DECIMAL(2,1),
review_text TEXT,
spoiler_flag BOOLEAN,
created_at TIMESTAMP,
updated_at TIMESTAMP,
FOREIGN KEY(user_id) REFERENCES Users(user_id),
FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
);

CREATE TABLE Watchlist (
watchlist_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
movie_id INT,
added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(user_id) REFERENCES Users(user_id),
FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
);

CREATE TABLE Follows (
follower_id INT,
following_id INT,
followed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(follower_id,following_id),
FOREIGN KEY(follower_id) REFERENCES Users(user_id),
FOREIGN KEY(following_id) REFERENCES Users(user_id)
);

CREATE TABLE Lists (
list_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
list_name VARCHAR(255),
description TEXT,
is_public BOOLEAN,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP,
FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

CREATE TABLE List_Items (
list_item_id INT AUTO_INCREMENT PRIMARY KEY,
list_id INT,
movie_id INT,
item_note TEXT,
position INT,
added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(list_id) REFERENCES Lists(list_id),
FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
);