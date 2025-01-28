-- 2025-01-23 11:52:09 [66 ms] - MySQL
CREATE TABLE author(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), surname VARCHAR(20), janr VARCHAR(500) ,yearr INT);

CREATE TABLE book(id INT AUTO_INCREMENT PRIMARY KEY, janr VARCHAR(500), price INT ,yearr INT, author_id INT, FOREIGN KEY (author_id) REFERENCES author(id));

INSERT INTO book (janr, price, yearr, author_id) VALUES
('Dystopian', 15000, 2007, 1),          
('Political Fiction', 18000, 2005, 1), 
('Southern Gothic', 20000, 2009, 2),    
('Bildungsroman', 22000, 2009, 2),      
('Fantasy', 25000, 2013, 3),            
('Drama', 26000, 2011, 3),              
('Historical Fiction', 30000, 2007, 4), 
('Tragedy', 32000, 2007, 4),            
('Romance', 18000, 2011, 5),            
('Realism', 19000, 2010, 5),            
('High Fantasy', 35000, 2012, 6),       
('Adventure', 34000, 2013, 6),          
('Picaresque', 16000, 2007, 7),         
('Adventure Fiction', 17000, 2007, 7),  
('Gothic Fiction', 25000, 2005, 8),     
('Science Fiction', 28000, 2005, 8),    
('Historical Novel', 31000, 2000, 9),   
('Philosophy', 33000, 2000, 9),         
('Magic Realism', 29000, 2007, 10),     
('Political Fiction', 30000, 2007, 10); 

INSERT INTO author (name, surname, janr, yearr) VALUES
('George', 'Orwell', 'Dystopian, Political fiction', 1949),
('Harper', 'Lee', 'Southern Gothic, Bildungsroman', 1960),
('J.K.', 'Rowling', 'Fantasy, Drama', 1997),
('F. Scott', 'Fitzgerald', 'Tragedy, Historical fiction', 1925),
('Jane', 'Austen', 'Romance, Realism', 1813),
('J.R.R.', 'Tolkien', 'High fantasy, Adventure', 1954),
('Mark', 'Twain', 'Picaresque, Adventure', 1884),
('Mary', 'Shelley', 'Gothic fiction, Science fiction', 1818),
('Leo', 'Tolstoy', 'Historical novel, Philosophy', 1869),
('Gabriel', 'Marquez', 'Magic realism, Political fiction', 1967);

SELECT * FROM book WHERE id=1


SELECT * FROM book WHERE janr="Dystopian"

SELECT * FROM book WHERE price=35000

SELECT * FROM book WHERE age=1

SELECT * FROM book WHERE yearr=2012

SELECT * FROM book WHERE author_id=1

SELECT * FROM author

SELECT * FROM author WHERE name="George"

SELECT * FROM author WHERE surname='Lee'

SELECT * FROM author WHERE janr="Fantasy"

SELECT * FROM author WHERE yearr=1967
