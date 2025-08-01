
CREATE DATABASE IF NOT EXISTS Practice;

USE Practice;

CREATE TABLE Teacher(
       id INT,
       name VARCHAR(30),
       subject VARCHAR(25),
       salary INT,
       PRIMARY KEY(id)
);

INSERT INTO 
Teacher(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM Teacher;

SELECT *
FROM Teacher
WHERE salary > 55000;

ALTER TABLE Teacher
CHANGE COLUMN salary ctc INT;

SELECT * FROM Teacher;

SET SQL_SAFE_UPDATES = 0;

UPDATE Teacher
SET ctc = ctc + (ctc * 0.25);

ALTER TABLE Teacher
ADD COLUMN city VARCHAR(25) DEFAULT "Gurgaon";

ALTER TABLE Teacher
DROP COLUMN ctc;
