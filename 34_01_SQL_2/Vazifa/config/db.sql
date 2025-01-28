-- Active: 1724135574484@@127.0.0.1@3306@homework
CREATE DATABASE homework

CREATE TABLE author (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    age INT
);

CREATE TABLE book(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    year int NOT NULL,
    author_id int,
    FOREIGN KEY (author_id) REFERENCES author (id)
)

INSERT INTO book (name, year, author_id) VALUES
('Urush, tinchlik', 1869, 1),
('Anna Karenina', 1877, 1),
('Ona', 1906, 11),
('Jinoyat, jazo', 1866, 11),
('Oq qayin', 1958, 4),
('Besh kun', 1985, 5),
('Farhod, Shirin', 1492, 6),
('Layli, Majnun', 1188, 7),
('Alpomish', 1800, 8),
('Sariq devni minib', 1913, 9);


CREATE TABLE users(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    age int NOT NULL
)

INSERT INTO users (name, password, age) VALUES
('Ali', 'password123', 25),
('Madina', 'madina2023', 22),
('Shoxruh', 'shox789', 28),
('Dilshod', 'dilshod456', 30),
('Anvar', 'anvar321', 27),
('Zarina', 'zarina999', 24),
('Jasur', 'jasur567', 26),
('Nozima', 'nozima111', 23),
('Aziz', 'aziz555', 29),
('Gulnoza', 'gulnoza888', 21);


CREATE TABLE comment(
    id int AUTO_INCREMENT PRIMARY KEY,
    comment VARCHAR(500) NOT NULL,
    user_id int NOT NULL,
    star int NOT NULL,
    book_id int NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (book_id) REFERENCES book (id)
)

INSERT INTO comment (comment, user_id, star, book_id) VALUES
('Juda ajoyib kitob!', 1, 5, 83),
('Mazmuni chuqur va o‘qishga arziydi.', 2, 4, 92),
('Menga unchalik yoqmadi.', 3, 2, 87),
('Klassika! Mutlaqo o‘qish kerak.', 4, 5, 84),
('Til o‘ta og‘ir edi, lekin yaxshi asar.', 5, 3, 85),
('Muallifning eng yaxshi kitoblaridan biri.', 6, 5, 86),
('Yaxshi, lekin kutilganidek emas.', 7, 3, 87),
('Tarixiy mazmuni zo‘r, hikoyalar ajoyib.', 8, 4, 88),
('O‘qiganingizdan so‘ng uzoq vaqt esda qoladi.', 9, 5, 89),
('Til uslubi va voqealar rivoji juda chiroyli.', 10, 5, 90);


CREATE TABLE user_likes(
    id int AUTO_INCREMENT PRIMARY KEY,
    book_id int NOT NULL,
    user_id int NOT NULL,

    FOREIGN KEY (book_id) REFERENCES book(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
)


INSERT INTO user_likes (book_id, user_id) VALUES
( 83, 1 ), -- Ali "Urush va tinchlik" kitobini yoqtirgan
( 84, 2 ), -- Anvar "Anna Karenina" kitobini yoqtirgan
( 92, 3 ), -- Madina "Ona" kitobini yoqtirgan
( 91, 4 ), -- Dilshod "Jinoyat va jazo" kitobini yoqtirgan
( 85, 5 ), -- Shoxruh "Oq qayin" kitobini yoqtirgan
( 86, 6 ), -- Zarina "Besh kun" kitobini yoqtirgan
( 87, 7 ), -- Jasur "Farhod va Shirin" kitobini yoqtirgan
( 88, 8 ), -- Nozima "Layli va Majnun" kitobini yoqtirgan
( 89, 9 ), -- Aziz "Alpomish" kitobini yoqtirgan
(90, 10 ); -- Gulnoza "Sariq devni minib" kitobini yoqtirgan


SELECT 
    author.name AS Author_Name, 
    book.name AS Book_Name, 
    book.year AS Publication_Year, 
    users.name AS User_Name, 
    users.age AS User_Age, 
    comment.comment AS User_Comments, 
    comment.star AS User_Star, 
    user_likes.book_id AS Liked_Book
FROM users
LEFT JOIN comment ON users.id = comment.user_id
LEFT JOIN book ON comment.book_id = book.id
LEFT JOIN author ON book.author_id = author.id
LEFT JOIN user_likes ON users.id = user_likes.user_id AND book.id = user_likes.book_id
ORDER BY users.name;

/* SELECT user.name, SUM(product.price) FROM 
user
JOIN userorder ON user.id = userorder.user_id
JOIN orderitems ON userorder.id = useritems.order_id
JOIN userorder ON orderitems.product_id = product_id
ORDER BY
user.name */