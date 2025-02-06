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



CREATE Table product(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(30),
    age INT,
    phone VARCHAR(15),
    password VARCHAR(200),
    role ENUM("admin", "superadmin", "user") NOT NULL
);

SELECT * from users

ALTER TABLE users add status VARCHAR(20)

ALTER TABLE users CHANGE COLUMN phone email VARCHAR(255);


update users set email = "saidkamolsaymamutov6@gmail.com" where id=1