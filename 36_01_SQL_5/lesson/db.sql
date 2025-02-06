-- Active: 1724135574484@@127.0.0.1@3306@n16
CREATE Table worker(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    Hourly_wage int NOT NULL,
    daily_wage INT
);

CREATE Table expemses(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    Total_price int
);

INSERT INTO worker(name, Hourly_wage) VALUES ("Richart", 2);

INSERT INTO expemses(name) VALUES ("Salary")

UPDATE worker set Hourly_wage=8 WHERE id=6;

DELETE from worker WHERE id = 6

SELECT * from worker;

SELECT * FROM expemses

CREATE TRIGGER add_workers
BEFORE INSERT ON worker
FOR EACH ROW
SET new.daily_wage = new.Hourly_wage * 12 * 20;


CREATE TRIGGER Insert_expenses
AFTER INSERT ON worker
FOR EACH ROW 
UPDATE expemses SET Total_price = (SELECT SUM(daily_wage) FROM worker) WHERE name="salary";


CREATE TRIGGER update_worker
BEFORE UPDATE ON worker
FOR EACH ROW
SET new.daily_wage = new.Hourly_wage * 12 * 20;


CREATE TRIGGER update_expenses
AFTER UPDATE ON worker
FOR EACH ROW
UPDATE expemses SET Total_price = (SELECT SUM(daily_wage) FROM worker) WHERE name="salary";


CREATE TRIGGER delete_expenses
AFTER DELETE ON worker
FOR EACH ROW
UPDATE expemses SET Total_price = (SELECT SUM(daily_wage) FROM worker) WHERE name="salary";


SELECT SUM(daily_wage) AS Barcha_summalar FROM worker;