CREATE DATABASE todoApp;

CREATE TABLE todo_listData (
	id SERIAL PRIMARY KEY,
	user_email VARCHAR(255),
	title VARCHAR(50),
    progress INT,
	date VARCHAR(300),
    created_at timestamp DEFAULT now() 
);

CREATE TABLE users (
	email VARCHAR(255) PRIMARY KEY,
	hashed_password VARCHAR(255)
);
