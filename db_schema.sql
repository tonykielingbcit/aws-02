DROP DATABASE IF EXISTS notes;
CREATE DATABASE notes;
USE notes;

-- Create a user that can access the database
DROP USER IF EXISTS 'notes_user'@'localhost';
CREATE USER 'notes_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyPassword1!';
GRANT ALL PRIVILEGES ON notes.* TO 'notes_user'@'localhost';

-- Create all the tables
DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

