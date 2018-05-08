-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:

-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)

);

-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean. 