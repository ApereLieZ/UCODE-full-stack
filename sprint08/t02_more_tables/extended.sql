use ucode_web;

CREATE  TABLE IF NOT EXISTS powers(
	id int PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL,
    name varchar(30) NOT NULL,
    points int NOT NULL,
    type ENUM('attack', 'defense') NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS races(
	id int PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL,
    name varchar(100) NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS teams(
	id int PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL,
    name varchar(20) NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE
)
