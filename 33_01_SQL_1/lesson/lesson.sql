-- create table product(id int auto_increment primary key, name varchar(20), color varchar(20), price int, categ_id int, FOREIGN KEY (categ_id) REFERENCES categeory(id))
-- insert into product(name, color, price, categ_id) values ("Artel", "black", 3000000, 2), ("Samsung", "white", 2000000, 2),("LG", "blue", 5000000, 2)
-- insert into categeory(name, img) values ("TV", "https://tezz.uz/uploads/images/product/521/thumbs/200739-10501050.jpg")

-- select * from product order by categ_id 
-- select * from product order by price 
-- select * from product order by price desc
-- select * from product where price = (SELECT MAX(price) FROM product)