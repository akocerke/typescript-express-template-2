-- Create database
DROP DATABASE IF EXISTS todo_app;
CREATE DATABASE todo_app;

-- Use the newly created database
USE todo_app;

-- Create user table
DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profileImgUrl VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create todos table
DROP TABLE IF EXISTS todos;
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    task VARCHAR(255) NOT NULL,
    isDone BOOLEAN NOT NULL DEFAULT FALSE,
    dueDate DATE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);

-- Insert initial data into user table
INSERT INTO user (email, name, password, profileImgUrl) VALUES 
('benutzer1@example.com', 'Benutzer Eins', 'passwort1', 'http://example.com/profil1.jpg'),
('benutzer2@example.com', 'Benutzer Zwei', 'passwort2', 'http://example.com/profil2.jpg'),
('benutzer3@example.com', 'Benutzer Drei', 'passwort3', 'http://example.com/profil3.jpg'),
('benutzer4@example.com', 'Benutzer Vier', 'passwort4', 'http://example.com/profil4.jpg'),
('benutzer5@example.com', 'Benutzer Fünf', 'passwort5', 'http://example.com/profil5.jpg'),
('benutzer6@example.com', 'Benutzer Sechs', 'passwort6', 'http://example.com/profil6.jpg'),
('benutzer7@example.com', 'Benutzer Sieben', 'passwort7', 'http://example.com/profil7.jpg'),
('benutzer8@example.com', 'Benutzer Acht', 'passwort8', 'http://example.com/profil8.jpg'),
('benutzer9@example.com', 'Benutzer Neun', 'passwort9', 'http://example.com/profil9.jpg'),
('benutzer10@example.com', 'Benutzer Zehn', 'passwort10', 'http://example.com/profil10.jpg');

-- Insert initial data into todos table
INSERT INTO todos (userId, task, isDone, dueDate) VALUES 
(1, 'Einkaufen gehen', FALSE, '2024-07-15'),
(1, 'Rechnung bezahlen', TRUE, '2024-07-10'),
(2, 'Hausaufgaben machen', FALSE, '2024-07-20'),
(2, 'Wäsche waschen', FALSE, '2024-07-16'),
(3, 'Auto reparieren', TRUE, '2024-07-12'),
(3, 'Geburtstagsgeschenk kaufen', FALSE, '2024-07-18'),
(4, 'Arzttermin vereinbaren', FALSE, '2024-07-19'),
(4, 'Rasen mähen', TRUE, '2024-07-11'),
(5, 'Projekt abschließen', FALSE, '2024-07-22'),
(5, 'Bücher zurück in die Bibliothek bringen', FALSE, '2024-07-13'),
(6, 'Freunde treffen', TRUE, '2024-07-14'),
(6, 'Urlaub planen', FALSE, '2024-07-21'),
(7, 'Wohnung putzen', FALSE, '2024-07-23'),
(7, 'Neuen Laptop kaufen', TRUE, '2024-07-09'),
(8, 'Zahnarzttermin wahrnehmen', FALSE, '2024-07-17'),
(8, 'Gartenarbeit machen', TRUE, '2024-07-10'),
(9, 'Bewerbungen schreiben', FALSE, '2024-07-24'),
(9, 'Fitnessstudio besuchen', TRUE, '2024-07-08'),
(10, 'Filmeabend organisieren', FALSE, '2024-07-25'),
(10, 'E-Mails beantworten', TRUE, '2024-07-07');


select*from todos;
select*from users;