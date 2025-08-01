
USE Practice;

CREATE TABLE student_info(
   roll_no INT PRIMARY KEY,
   name VARCHAR(50),
   city VARCHAR(50),
   marks INT
);

INSERT INTO
student_info(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM student_info;

SELECT *
FROM student_info
WHERE marks > 75;

SELECT DISTINCT city
FROM student_info;

SELECT city
FROM student_info
GROUP BY city;

SELECT city, max(marks)
FROM student_info
GROUP BY city;

SELECT avg(marks)
FROM student_info;

ALTER TABLE student_info
ADD COLUMN grade VARCHAR(10);

UPDATE student_info
SET grade = "O"
WHERE marks > 80;

UPDATE student_info
SET grade = "A"
WHERE marks BETWEEN 70 AND 80;

UPDATE student_info
SET grade = "B"
WHERE marks >= 60 AND marks <= 70;