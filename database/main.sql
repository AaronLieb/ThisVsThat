-- $ sqlite3 valid_words.db < valid_words.sql

BEGIN TRANSACTION;

DROP TABLE IF EXISTS Ranking;
CREATE TABLE Ranking (
    id VARCHAR(8) PRIMARY KEY, -- A-Za-z minus LI
	name VARCHAR
);

DROP TABLE IF EXISTS Choice;
CREATE TABLE Choice (
	id INTEGER,
	ranking VARCHAR(8),
  text VARCHAR,
	matchupsWon INT,
	matchups INT,
	PRIMARY KEY(id)
);

COMMIT;
