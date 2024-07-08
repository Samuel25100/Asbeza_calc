-- Dump file for the AsbezaCalc database database name AsbezaCalcDB
-- Tables are: grocery, tools, houses, hotels, vehicles

DROP DATABASE IF EXISTS AsbezaCalcDB;

CREATE USER IF NOT EXISTS 'asebezcal'@'localhost';
SET PASSWORD FOR 'asebezcal'@'localhost' = 'asebezcalPWD';
CREATE DATABASE IF NOT EXISTS AsbezaCalcDB;
GRANT ALL ON AsbezaCalcDB.* TO 'asebezcal'@'localhost';
FLUSH PRIVILEGES;


USE AsbezaCalcDB;

DROP TABLE IF EXISTS `grocery`;
CREATE TABLE IF NOT EXISTS grocery (`name` VARCHAR(26), `price` INT, `size` VARCHAR(5), `imageid` VARCHAR(30));
DROP TABLE IF EXISTS `houses`;
CREATE TABLE IF NOT EXISTS houses (`name` VARCHAR(26), `type` VARCHAR(26), `size` VARCHAR(20), `price` INT, `imageid` VARCHAR(30));
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE IF NOT EXISTS vehicles (`name` VARCHAR(26), `type` VARCHAR(26), `price` INT, `imageid` VARCHAR(30));
DROP TABLE IF EXISTS `hotels`;
CREATE TABLE IF NOT EXISTS hotels (`name` VARCHAR(26), `size` VARCHAR(26), `price` INT, `imageid` VARCHAR(30));
DROP TABLE IF EXISTS `tools`;
CREATE TABLE IF NOT EXISTS tools (`name` VARCHAR(26), `type` VARCHAR(26), `price` INT, `imageid` VARCHAR(30));

INSERT INTO grocery VALUES ("Onion",30,"kg","src/assets/onion.png"),
("Carrot", 35, "kg", "src/assets/carrot.png"),
( "Potato",  40, "kg",  "src/assets/potato.png"),
( "Cabbage",  40, "kg",  "src/assets/cabbage.png"),
( "Pumpkin",  40, "kg",  "src/assets/pumpkin.png"),
( "ChiliPepper",  40, "kg",  "src/assets/chili-pepper.png"),
( "Olive Oil",  48, "lt",  "src/assets/olive-oil.png"),
( "Tomato",  43, "kg",  "src/assets/tomato.png"),
( "PeaNut Butter",  46, "piece",  "src/assets/peanut-butter.png"),
("Spinach", 50, "kg", "src/assets/spinach.png"),
("Tea", 46, "piece", "src/assets/tea.png"),
("Oil", 50, "lt", "src/assets/oil.png"),
("Berberea", 50, "kg", "src/assets/berberea.png"),
("Rice", 50, "kg", "src/assets/rice.png"),
("Sugar", 50, "kg", "src/assets/sugar.png"),
("Coffee", 50, "kg", "src/assets/coffee.png"),
("Bread", 50, "piece", "src/assets/bread.png"),
("Cucumber", 50, "kg", "src/assets/Cucumber.png"),
("Pasta", 50, "piece", "src/assets/orange.png"),
("Mango", 50, "kg", "src/assets/mango.png"),
("Avocado", 50, "kg", "src/assets/avocado.png");

INSERT INTO houses VALUES ("Bole", "condominium", "1-BedRoom", 60, ""),
("Bole", "condominium", "2-BedRoom", 80, ""),
("Bole", "condominium", "3-BedRoom", 100, ""),
("Mexico", "condominium", "1-BedRoom", 30, ""),
("Mexico", "condominium", "2-BedRoom", 30, ""),
("Mexico", "condominium", "3-BedRoom", 30, ""),
("Estifanos", "condominium", "1-BedRoom", 30, ""),
("Estifanos", "condominium", "2-BedRoom", 30, ""),
("Estifanos", "condominium", "3-BedRoom", 30, ""),
("Bole", "Apartment", "1-BedRoom", 30, ""),
("Bole", "Apartment", "2-BedRoom", 30, ""),
("Bole", "Apartment", "3-BedRoom", 30, ""),
("Bole", "Apartment", "4-BedRoom", 30, ""),
("Mexico", "Apartment", "1-BedRoom", 30, ""),
("Mexico", "Apartment", "2-BedRoom", 30, ""),
("Mexico", "Apartment", "3-BedRoom", 30, ""),
("Estifanos", "Apartment", "1-BedRoom", 30, ""),
("Estifanos", "Apartment", "2-BedRoom", 30, ""),
("Estifanos", "Apartment", "3-BedRoom", 30, "");

INSERT INTO vehicles VALUES ("Toyota-Camri", "Sedan", 45, "src/assets/Toyota-Camri"),
("Toyota-Yaris", "HatchBack", 45, "src/assets/Toyota-Yaris"),
("Toyota-Vitz", "HatchBack", 45, "src/assets/Toyota-Vitz"),
("Toyota-LandCruiser", "SUV", 45, "src/assets/Toyota-Vitz"),
("Toyota-LandCruiser", "PickUp", 45, "src/assets/Toyota-Vitz"),
("Nissan", "SUV", 45, "src/assets/Toyota-Vitz"),
("Nissan", "HatchBack", 45, "src/assets/Toyota-Vitz"),
("Toyota-RAV4", "CrossOver", 45, "src/assets/Toyota-Vitz"),
("Toyota-Corolla", "Sedan", 45, "src/assets/Toyota-Vitz"),
("Chevrollet", "Pickup", 45, "src/assets/Toyota-Vitz"),
("BYD-Eletric", "HatchBack", 45, "src/assets/Toyota-Vitz"),
("BMW", "Sedan", 45, "src/assets/Toyota-Vitz"),
("BMW", "CrossOver", 45, "src/assets/Toyota-Vitz"),
("Ford", "Sedan", 45, "src/assets/Toyota-Vitz"),
("Ford", "PickUp", 45, "src/assets/Toyota-Vitz"),
("Peugeot", "Sedan", 45, "src/assets/Toyota-Vitz"),
("Peugeot", "HatchBack", 45, "src/assets/Toyota-Vitz"),
("VolksWagen", "Sedan", 45, "src/assets/Toyota-Vitz"),
("LandRover", "SUV", 45, "src/assets/Toyota-Vitz"),
("Mistubushi", "PickUp", 45, "src/assets/Toyota-Vitz");

INSERT INTO hotels VALUES 
("Sheraton", "1-BedRoom", 20, ""),
("Sheraton", "2-BedRoom", 20, ""),
("Sheraton", "1-BedRoomVIP", 20, ""),
("Sheraton", "2-BedRoomVIP", 20, ""),
("Hilton", "1-BedRoom", 20, ""),
("Hilton", "2-BedRoom", 20, ""),
("Hilton", "1-BedRoomVIP", 20, ""),
("Hilton", "2-BedRoomVIP", 20, ""),
("Capital", "1-BedRoom", 20, ""),
("Capital", "2-BedRoom", 20, ""),
("Capital", "1-BedRoomVIP", 20, ""),
("Capital", "2-BedRoomVIP", 20, ""),
("Jupiter", "1-BedRoom", 20, ""),
("Jupiter", "2-BedRoom", 20, ""),
("Jupiter", "1-BedRoomVIP", 20, ""),
("Jupiter", "2-BedRoomVIP", 20, ""),
("SkyLight", "1-BedRoom", 20, ""),
("SkyLight", "2-BedRoom", 20, ""),
("SkyLight", "1-BedRoomVIP", 20, ""),
("HyattRegency", "1-BedRoom", 20, ""),
("HyattRegency", "2-BedRoom", 20, ""),
("HyattRegency", "1-BedRoomVIP", 20, "");

INSERT INTO tools VALUES 
("Camera", "Canon", 450, ""),
("Camera", "Sony", 500, ""),
("Camera", "Nikon", 550, ""),
("Speaker", "Gpas", 35, ""),
("Laptop", "Lenovo", 200, ""),
("Laptop", "Lenovo", 200, ""),
("Laptop", "Apple-Mac", 250, ""),
("Chair", "GM-Furniture", 100, ""),
("Table", "GM-Furniture", 80, ""),
("Bed", "GM-Furniture", 85, ""),
("Mattress", "RainBow", 45, ""),
("Sofas", "GM-Furniture", 85, ""),
("Utelsil-Set", "", 100, ""),
("Oven", "", 100, ""),
("Fridge", "Samsung", 100, ""),
("Flat", "Sony-32in", 100, "");
