-- Active: 1740465415048@@127.0.0.1@5432@n16@public

create table player(id SERIAL PRIMARY KEY, name VARCHAR(20), age INTEGER NOT NULL, playersNumber INTEGER NOT NULL)

create table Club(id SERIAL PRIMARY KEY, ClubName VARCHAR(20), PlayersId INTEGER NOT NULL REFERENCES player(id));

CREATE TABLE cantrakt (id SERIAL PRIMARY KEY, contractSumma FLOAT, cantractTerm TIMESTAMP DEFAULT now(), playersId INTEGER REFERENCES player(id), clubId INTEGER REFERENCES Club(id))
