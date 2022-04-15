use ucode_web;

CREATE TABLE IF NOT EXISTS users (
	id int AUTO_INCREMENT PRIMARY KEY,
    login varchar(30) UNIQUE NOT NULL,
    password varchar(40) NOT NULL,
    name varchar(40) NOT NULL,
    email varchar(40) UNIQUE NOT NULL,
    role ENUM("user", "admin") DEFAULT "user"
);