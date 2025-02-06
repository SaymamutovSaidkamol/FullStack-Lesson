-- Active: 1724135574484@@127.0.0.1@3306@online_magazin

CREATE TABLE region (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);


CREATE TABLE banner (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT null
);

ALTER TABLE users CHANGE name firstname VARCHAR(255);

ALTER TABLE users ADD COLUMN status VARCHAR(50);

UPDATE users SET email = "cryptouchun06@gmail.com" WHERE id = 1


CREATE TABLE banner_item (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    banner_id INTEGER,
    FOREIGN KEY (banner_id) REFERENCES banner (id),
    region_id INTEGER,
    FOREIGN KEY (region_id) REFERENCES region (id)
);


CREATE TABLE users(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    age INTEGER NOT NULL,
    region_id INTEGER,
    FOREIGN KEY (region_id) REFERENCES region (id)
);

CREATE TABLE category (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL
)

CREATE TABLE product (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    price INTEGER NOT NULL,
    image VARCHAR(50) NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (id)
)

CREATE TABLE comment (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    msg VARCHAR(255) NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES user (id),
    product_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES product (id)
);

CREATE TABLE type (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE type_variant (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type_id INTEGER,
    FOREIGN KEY (type_id) REFERENCES type (id)
);

CREATE TABLE product_variant (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    price INTEGER NOT NULL,
    product_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES product (id),
    type_variant_id INTEGER,
    FOREIGN KEY (type_variant_id) REFERENCES type_variant (id)
);


CREATE TABLE orders (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    users_id INTEGER,
    FOREIGN KEY (users_id) REFERENCES users(id)
)

CREATE TABLE order_item (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    product_variant_id INTEGER,
    FOREIGN KEY (product_variant_id) REFERENCES product_variant (id),
    order_id INTEGER,
    FOREIGN KEY (order_id) REFERENCES orders (id)
)

INSERT INTO region (name) VALUES
('Toshkent'),
('Samarqand'),
('Buxoro'),
('Xorazm'),
('Namangan'),
('Andijon'),
('Farg‘ona'),
('Surxondaryo'),
('Qashqadaryo'),
('Jizzax');



INSERT INTO banner (name) VALUES
('Yangi chegirmalar'),
('Katta aksiya'),
('Telefonlar chegirmada'),
('Yozgi maxsus takliflar'),
('Qishgi aksiyalar'),
('Texnika bozorida chegirma'),
('Eng so‘nggi yangiliklar'),
('Elektronika savdosi'),
('Sotuvni oshirish'),
('Maxsus takliflar');


INSERT INTO banner_item (name, banner_id, region_id) VALUES
('Reklama 1', 1, 1), ('Reklama 2', 2, 2), ('Reklama 3', 3, 3), ('Reklama 4', 4, 4), ('Reklama 5', 5, 5),
('Reklama 6', 6, 6), ('Reklama 7', 7, 7), ('Reklama 8', 8, 8), ('Reklama 9', 9, 9), ('Reklama 10', 10, 10);

INSERT INTO user (name, age, region_id) VALUES
('Ali', 25, 1), ('Vali', 30, 2), ('Hasan', 27, 3), ('Husan', 22, 4), ('Zuhra', 29, 5),
('Dilnoza', 24, 6), ('Javlon', 31, 7), ('Shaxboz', 26, 8), ('Gulnoza', 28, 9), ('Botir', 23, 10);

INSERT INTO category (name) VALUES
('Elektronika'), ('Uy jihozlari'), ('Kiyim-kechak'), ('Bolalar uchun'), ('Kitoblar'),
('Sport anjomlari'), ('Oziq-ovqat'), ('Go‘zallik va parvarish'), ('Avtomobil'), ('Uy hayvonlari');

INSERT INTO product (name, price, image, category_id) VALUES
('Smartfon', 250, 'smartfon.jpg', 1), ('Televizor', 600, 'tv.jpg', 1), ('Muzlatgich', 800, 'fridge.jpg', 2),
('Krossovka', 120, 'shoes.jpg', 3), ('Bolaning velosipedi', 150, 'bike.jpg', 4),
('Badiiy kitob', 20, 'book.jpg', 5), ('Boks qo‘lqopi', 50, 'gloves.jpg', 6),
('Shokolad', 5, 'chocolate.jpg', 7), ('Shampun', 10, 'shampoo.jpg', 8), ('Avtomobil moyi', 40, 'oil.jpg', 9);

INSERT INTO comment (msg, user_id, product_id) VALUES
('Juda yaxshi mahsulot!', 1, 1), ('Sifati yomon emas', 2, 2), ('Zo‘r televizor', 3, 3), ('Narxi biroz qimmat', 4, 4),
('Bolalar uchun juda mos', 5, 5), ('Kitob ajoyib ekan', 6, 6), ('Sportchilar uchun zo‘r', 7, 7),
('Juda mazali shokolad', 8, 8), ('Sochni yaxshi parvarishlaydi', 9, 9), ('Yaxshi avtomobil moyi', 10, 10);

INSERT INTO type (name) VALUES
('Telefon'), ('Televizor'), ('Muzlatgich'), ('Poyabzal'), ('Velosiped'),
('Kitob'), ('Sport anjomlari'), ('Shirinlik'), ('Kosmetika'), ('Avtomobil buyumlari');

INSERT INTO type_variant (name, type_id) VALUES
('Samsung', 1), ('LG', 2), ('Indesit', 3), ('Nike', 4), ('Stels', 5),
('Badiiy', 6), ('Professional', 7), ('Qorong‘u shokolad', 8), ('Tabiiy kosmetika', 9), ('Brend moy', 10);

INSERT INTO product_variant (price, product_id, type_variant_id) VALUES
(270, 1, 1), (620, 2, 2), (820, 3, 3), (130, 4, 4), (160, 5, 5),
(25, 6, 6), (55, 7, 7), (6, 8, 8), (12, 9, 9), (45, 10, 10);

INSERT INTO orders (users_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10);

INSERT INTO order_item (product_variant_id, order_id) VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10);