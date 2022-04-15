USE ucode_web;

DROP TABLE IF EXISTS heroes;

CREATE TABLE IF NOT EXISTS heroes(
	id int NOT NULL AUTO_INCREMENT UNIQUE,
    name varchar(30) NOT NULL UNIQUE,
    description text(150) NOT NULL,
    race VARCHAR(255) DEFAULT 'human' NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL,
    PRIMARY KEY(id)
)