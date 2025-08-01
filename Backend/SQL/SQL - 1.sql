CREATE DATABASE college;

CREATE DATABASE IF NOT EXISTS college;

CREATE DATABASE IF NOT EXISTS instagram;

DROP DATABASE IF EXISTS college;

SHOW DATABASES;

USE instagram;

SHOW TABLES;

CREATE TABLE user(
   id INT,
   age INT,
   name VARCHAR(30) NOT NULL,
   email VARCHAR(50) UNIQUE,
   followers INT DEFAULT 0,
   following INT,
   CONSTRAINT age_check CHECK (age >= 13),
   PRIMARY KEY(id)
);

INSERT INTO user
(id, age, name, email)
VALUES
(10, 10, "random", "donald@gmail.com");

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@gmail.com", 10000, 1000);

SELECT DISTINCT age FROM user;

CREATE TABLE post(
   id INT PRIMARY KEY,
   content VARCHAR(100),
   user_id INT,
   FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Where Clause :-

SELECT *
FROM user
WHERE followers >= 200;

SELECT name, followers
FROM user
WHERE followers >= 200;

SELECT name, age
FROM user
WHERE age < 16;

-- Where Clause with Operators :-

SELECT name, age
FROM user
WHERE age + 1 = 18;

-- Where Clause with Logical Operators :-

SELECT name, age, followers
FROM user
WHERE age > 15 AND followers > 200;

SELECT name, age, followers
FROM user
WHERE age > 15 OR followers > 200;

SELECT name, age, followers
FROM user
WHERE age BETWEEN 15 AND 17;

SELECT name, followers, email
FROM user
WHERE email IN ("donald@gmail.com", "bob123@gmail.com", "abcd@gmail.com");

SELECT name, age, followers, email
FROM user
WHERE age IN (14, 16);

SELECT name, age, followers, email
FROM user
WHERE age NOT IN (14, 16);

-- Limit Clause :-

SELECT name, age, followers
FROM user
LIMIT 3;

SELECT name, age, followers
FROM user
WHERE age > 14
LIMIT 2;

-- Order By Clause :-

SELECT name, age, followers
FROM user
ORDER BY followers ASC;

SELECT name, age, followers
FROM user
ORDER BY followers DESC;

SELECT name, age, followers
FROM user
ORDER BY followers;
/* ---> If we write nothing in order by clause after the column name then
by default it will sort in Ascending Order. */

-- Aggregate Functions :-

SELECT max(followers)
FROM user;

SELECT max(age)
FROM user;

SELECT count(age)
FROM user
WHERE age = 14;

SELECT min(age)
FROM user;

SELECT count(age)
FROM user
WHERE age = ( SELECT max(age) FROM user );

SELECT count(age)
FROM user
WHERE age = ( SELECT min(age) FROM user );

SELECT avg(age)
FROM user;

SELECT sum(followers)
FROM user;

-- Group By Clause :-

SELECT age
FROM user
GROUP BY age;

SELECT age, count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age;

-- Having Clause :-

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;

-- General Order :-

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

-- Update Queries :-

UPDATE user
SET followers = 600
WHERE age = 16;

SET SQL_SAFE_UPDATES = 0; /* <--- To remove the error for updation */

SELECT * FROM user;

-- Delete Queries :-

DELETE FROM user
WHERE age = 14;
/* ---> If we do not mention the where clause with delete query then it will
        delete all rows of the table. */
        
SELECT * FROM user;
        
-- Alter Queries :-

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

ALTER TABLE user
DROP COLUMN age;

ALTER TABLE user
RENAME TO instaUser;

ALTER TABLE instaUser
CHANGE COLUMN followers subs INT DEFAULT 0;

ALTER TABLE instaUser
MODIFY subs INT DEFAULT 5;

INSERT INTO instaUser
(id, name, email, following)
VALUES
(7, "gemini", "gem@yahoo.in", 120);

-- SELECT * FROM user;
SELECT * FROM instaUser;

-- Truncate Query :-

DROP TABLE post;

TRUNCATE TABLE instaUser;

SELECT * FROM instaUser;
