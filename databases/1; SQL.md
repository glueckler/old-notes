Structured Query Language
=========================

(Relational Data Base Management System)

(instructions)[https://www.postgresql.org/docs/8.3/static/manage-ag-overview.html]



create database
---------------

// Create a database, named "development"

```
CREATE DATABASE development;
```

_

// Create a table named "users"

```
CREATE TABLE users (
  full_name VARCHAR(100),
  username VARCHAR(100)
);```


// note, columns in RDBMS require each element to have a data type ie.. VARCHAR

_


Editing Tables
--------------

### CREATE
```
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

ex //
```
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```


### DROP

```
DROP TABLE
```
// Drops an existing table in the database
```
DROP TABLE IF EXISTS
```
// Drops table without error if table doesn't exist
```
DROP TABLE IF EXISTS CASCADE
```
// If foreign key exists in table, delete all dependancies

// ex
```
DROP TABLE IF EXISTS doodies CASCADE;
```


---

### TRUNCATE

```
TRUNCATE TABLE
```
// used to delete the data of a table but not the table itself


---

### Alter tables


```
ALTER TABLE .. ADD
```
// to add a column in a table

// ex
```
ALTER TABLE table_name
ADD column_name datatype;
```

```
ALTER TABLE .. DROP COLUMN
```
// To delete a column in a table, use the following syntax (notice that some database systems don't allow deleting a column)

// ex
```
ALTER TABLE table_name
DROP COLUMN column_name;
```



---


### Constraints

// SQL constraints are used to specify rules for the data in a table.

// This ensures the accuracy and reliability of the data in the table.

// If there is any violation between the constraint and the data action, the action is aborted.

// Column level constraints apply to a column, and table level constraints apply to the whole table.

// The following constraints are commonly used in SQL:

```
NOT NULL - Ensures that a column cannot have a NULL value
UNIQUE - Ensures that all values in a column are different
PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
FOREIGN KEY - Uniquely identifies a row/record in another table
CHECK - Ensures that all values in a column satisfies a specific condition
DEFAULT - Sets a default value for a column when no value is specified
INDEX - Used to create and retrieve data from the database very quickly
```

---


### examples
```
CREATE TABLE fleet (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE ship (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  datebuild DATE,
  fleetid INTEGER REFERENCES fleet (id) NOT NULL
);

CREATE TABLE sailor  (
  id INTEGER PRIMARY KEY,
  dob DATE,
  name VARCHAR(50)
);

CREATE TABLE rank (
  id INTEGER PRIMARY KEY,
  ranktype VARCHAR(50)
);

CREATE TABLE doodies (
  id INTEGER PRIMARY KEY,
  start DATE,
  antistart DATE,
  shipid INTEGER REFERENCES ship (id) NOT NULL,
  sailorid INTEGER REFERENCES sailor (id) NOT NULL,
  rankid INTEGER REFERENCES rank (id) NOT NULL
);
```



-------------------------------------------------------------












