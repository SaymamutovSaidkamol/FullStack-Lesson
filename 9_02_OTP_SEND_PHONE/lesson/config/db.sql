
use homework

CREATE Table users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
    phone VARCHAR(20),
    password VARCHAR(200)
)

ALTER TABLE users
ADD COLUMN verified VARCHAR(30);


ALTER TABLE users DROP COLUMN verified;



CREATE Table product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
    price INT,
    color VARCHAR(20)
)