-- $ sqlite3 valid_words.db < valid_words.sql

BEGIN TRANSACTION;

DROP TABLE IF EXISTS Ranking;
CREATE TABLE Ranking (
    id VARCHAR(8) PRIMARY KEY -- A-Za-z minus LI
);

DROP TABLE IF EXISTS Choice;
CREATE TABLE Choice (
    text VARCHAR PRIMARY KEY,
	ranking VARCHAR(8),
	votes INT
);

COMMIT;
