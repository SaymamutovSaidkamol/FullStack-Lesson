-- Active: 1724135574484@@127.0.0.1@3306@lesson
CREATE DATABASE lesson

CREATE Table users(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(30),
    age INT,
    phone VARCHAR(15),
    password VARCHAR(200),
    role ENUM("admin", "superadmin", "user") NOT NULL
)

