CREATE TABLE users (
	id bigint NOT NULL,
	name varchar(45) NOT NULL PRIMARY KEY,
	password varchar(45) NOT NULL,
	rol int NOT NULL
);

CREATE TABLE music (
	id serial PRIMARY KEY,
	link varchar(200) NOT NULL,
	table_name varchar(45) NOT NULL,
	FOREIGN KEY (table_name) REFERENCES users(name)
);


INSERT INTO users VALUES(10021232,'Wanumen','1234',1),(100,'Empleado','1234',2),(1,'Mesa 1','1234',3);

SELECT * FROM music;

TRUNCATE TABLE music RESTART IDENTITY;
