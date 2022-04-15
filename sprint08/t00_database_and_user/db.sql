CREATE DATABASE IF NOT EXISTS  ucode_web;
CREATE USER IF NOT EXISTS 'yivanov'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL ON ucode_web.* TO 'yivanov'@'localhost';