-- Your SQL goes here
CREATE TABLE tasks (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       description TEXT
)
