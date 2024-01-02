CREATE TABLE postcode 
( number TEXT UNIQUE NOT NULL CHECK(length(number) == 4),
  city TEXT NOT NULL CHECK(length(number) > 0));



CREATE TABLE postcode (number, city);
INSERT INTO postcode (number, city) VALUES ('0001', 'Oslo');

INSERT INTO postcode (number, city) VALUES ('4036', 'Stavanger'), ('9019', 'Tromsø');

-- select with specific columns names
SELECT number, city FROM postcode;

-- select all columns
SELECT * FROM postcode;

-- select with condition
SELECT city FROM postcode WHERE number = '4036';

-- calculate how many rows exist with given value
SELECT COUNT(number) FROM postcode WHERE city = 'Stavanger';

-- delete all rows with given value
DELETE FROM postcode WHERE city = 'Stavanger' AND number = '4024';

-- Update column in rows with value
UPDATE postcode
SET city = 'Svg.' 
WHERE city = 'Stavanger';

-- Every table has a rowid column, which contains unique ids
SELECT rowid, number, city FROM postcode;