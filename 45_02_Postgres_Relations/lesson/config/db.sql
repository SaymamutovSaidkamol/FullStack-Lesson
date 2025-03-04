-- ENUM turini yaratish
CREATE TYPE user_role AS ENUM ('ADMIN', 'SUPER_ADMIN');
CREATE TYPE mator_enum AS ENUM ('Plastmassa mator', 'Temir mator', 'Matorlik', 'Turba mator', 'Matorsiz');
CREATE TYPE BuySell AS ENUM ('Plastmassa mator', 'Temir mator', 'Matorlik', 'Turba mator', 'Matorsiz');
CREATE TYPE shakli_enum AS ENUM ('Dumoloq', 'Tortburchak');
CREATE TABLE plastmassa(
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) NOT NULL,
    name VARCHAR(32) NOT NULL,
    colorId INTEGER NOT NULL REFERENCES color(id),
    mator mator_enum,
    shakli shakli_enum,
    kelganVaqti INTEGER,
    astatka INTEGER
)


CREATE TABLE color(
    id SERIAL PRIMARY KEY,

    name VARCHAR(32)
)
-- Users jadvalini yaratish
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(32),
    lastName VARCHAR(32),
    phone VARCHAR(15),
    email VARCHAR(64),
    role user_role -- ENUM tipidan foydalanish
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    plastmassaId INTEGER NOT NULL REFERENCES plastmassa(id),
    "type"  BuySell,
    toPay BOOLEAN,
    clientId INTEGER NOT NULL REFERENCES client(id)
);


CREATE TABLE client(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32),
    phone VARCHAR(15),
    regionId INTEGER NOT NULL REFERENCES region(id)
)

CREATE TABLE region(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32)
)

insert INTO color(name) VALUES ('black')