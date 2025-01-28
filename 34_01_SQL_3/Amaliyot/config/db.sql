CREATE TABLE users(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), password VARCHAR(500))



CREATE TABLE product(id int AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(50), 
price VARCHAR(50), 
color VARCHAR(25), 
category_id int,
img VARCHAR(200),
FOREIGN KEY (category_id) REFERENCES category(id))



INSERT INTO users(username, password) VALUES ("Saidkamol", "1234")


INSERT INTO product(name, price, color, category_id, img)



DELETE from users WHERE id=1