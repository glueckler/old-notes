SQL READ
--------



// Retrieve all tweets belonging to @DreamLead (the Retrieve operation in CRUD)

```
SELECT text, created_at FROM tweets WHERE username="DreamLead";
```

// ex

```
SELECT population FROM world
  WHERE name = 'Germany'
```

---

### * (all selector)

// ex
```
SELECT * FROM nobel
 WHERE winner IN
('Theodore Roosevelt',
'Woodrow Wilson',
'Jimmy Carter',
'Barack Obama')
```

---

### DISTINCT

// By default the result of a SELECT may contain duplicate rows.

//We can remove these duplicates using the DISTINCT key word

// ex
```
SELECT DISTINCT continent FROM world
```


---

### AS

// SQL aliases are used to give a table, or a column in a table, a temporary name

// An alias only exists for the duration of the query.

// Column Syntax
```
SELECT column_name AS alias_name
FROM table_name;
```

// ex
```
SELECT CustomerName AS Customer, ContactName AS [Contact Person]
FROM Customers;
```

// Table Syntax
```
SELECT column_name(s)
FROM table_name AS alias_name;
```

// ex
```
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName="Around the Horn" AND c.CustomerID=o.CustomerID;
```

---


### CASE

// syntax

```
CASE WHEN condition1 THEN value1
     WHEN condition2 THEN value2
     ELSE def_value
END
```
// ex
```
SELECT name, population
      ,CASE WHEN population<1000000
            THEN 'small'
            WHEN population<10000000
            THEN 'medium'
            ELSE 'large'
       END
  FROM bbc
  ```


---


### WHERE, BETWEEN, IN

// WHERE allows you to set conditions

// ex, gdp per person in countries with more than 200 million
```
SELECT name, gdp/population
FROM world
WHERE population >= 200000000
```

// BETWEEN allows range checking
```
SELECT name, area FROM world
  WHERE area BETWEEN 250000 AND 300000
```

// The word IN allows us to check if an item is in a list
```
SELECT name, population FROM world
  WHERE name IN ('Brazil', 'Russia', 'India', 'China');
```

---


### LIKE, NOT LIKE, %, _

// The % is a wild-card it can match any characters

// ex, Find the country that start with F
```
SELECT name FROM world
  WHERE name LIKE 'F%'
```

// ex, countries that contain the letter x
```
SELECT name FROM world
  WHERE name LIKE '%x%'
```

// You can use the underscore as a single character wildcard

// Find the countries that have "n" as the second character
```
SELECT name FROM world
WHERE name LIKE '_n%'
ORDER BY name
```

// NOT LIKE '%a%' excludes characters from your results



---

### Conditionals

```
= Equal
<>  Not equal. Note: In some versions of SQL this operator may be written as !=
> Greater than
< Less than
>=  Greater than or equal
<=  Less than or equal
```


---

### AND, OR and NOT

// ex, NOT syntax
```
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

---

### XOR

// Exclusive OR mean either one statement or another but not both
```
SELECT name, population, area
FROM world
WHERE population >= 250000000 XOR area >= 3000000
```

---

### ROUND

ROUND(f,p)

//returns f rounded to p decimal places

```
SELECT
name,
ROUND(population/1000000, 2),
ROUND(gdp/1000000000, 2)
FROM world
WHERE continent = 'South America'
```

---

### Length

LENGTH(s) // returns the number of characters in string s

// ex, Show the name and capital where the name and the capital have the same number of characters.

```
SELECT name, capital
  FROM world
 WHERE LENGTH(name) = LENGTH(capital)
```

---

### LEFT

// Syntax

LEFT(string, number_of_chars)

// ex
```
SELECT name, capital
FROM world
WHERE LEFT(name,1) = LEFT(capital,1)
AND name <> capital
```

---

### ORDER BY

// Syntax

```
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

// ex
```
select winner, yr, subject
from nobel
Where winner like 'Sir%'
ORDER BY yr DESC, winner DESC
```

// ex
```
SELECT winner, subject
  FROM nobel
 WHERE yr=1984
 ORDER BY subject IN ('Physics','Chemistry'),subject,winner
 ```

----

### concat

// The CONCAT() function concatenates two or more expressions together.

// Syntax
```
CONCAT(expression1, expression2, expression3,...)
```

// ex, Concatenate three columns into one "Address" column
```
SELECT CONCAT(Address, " ", PostalCode, " ", City) AS Address
FROM Customers;
```


---

### SUM, COUNT, MAX, AVG

// ex
```
SELECT SUM(population), SUM(gdp)
  FROM bbc
  WHERE region = 'Europe'
  ```

// ex, For each continent show the continent and number of countries with populations of at least 10 million.
```
SELECT continent, COUNT(name)
FROM world
WHERE population>= 10000000
GROUP BY continent
```

---

### GROUP BY, HAVING

// By including a GROUP BY clause functions such as SUM and COUNT are applied to groups of items sharing values

// ex, For each continent show the continent and number of countries
```
SELECT continent, COUNT(name)
  FROM world
  GROUP BY continent
 ```

// ex, List the continents that have a total population of at least 100 million
```
SELECT continent
from world
GROUP BY (continent) HAVING SUM(population)>100000000
```

// ex, Show the total population of those continents with a total population of at least half a billion
```
SELECT continent, SUM(population)
  FROM world
 GROUP BY continent
HAVING SUM(population)>500000000
```

// The HAVING clause allows use to filter the groups which are displayed.

// The WHERE clause filters rows before the aggregation, the HAVING clause filters after the aggregation.

// If a ORDER BY clause is included we can refer to columns by their position

// ex
```
SELECT continent, SUM(population)
  FROM world
 GROUP BY continent
HAVING SUM(population)>500000000
```


---

### escape characters

```
MySQL recognizes the following escape sequences.
\0     An ASCII NUL (0x00) character.
\'     A single quote (“'”) character.
\"     A double quote (“"”) character.
\b     A backspace character.
\n     A newline (linefeed) character.
\r     A carriage return character.
\t     A tab character.
\Z     ASCII 26 (Control-Z). See note following the table.
\\     A backslash (“\”) character.
\%     A “%” character. See note following the table.
\_     A “_” character. See note following the table.
```



---



SQL JOINS
---------

// Join allows you to use data from two or more tables
(examples)[http://sqlzoo.net/wiki/The_JOIN_operation]

### INNER, LEFT INNER


// ex,
```
SELECT *
  FROM game JOIN goal ON (id=matchid)
```
// The FROM clause says to merge data from the goal table with that from the game table.

// The ON says how to figure out which rows in game go with which rows in goal - the id from goal must match matchid from game.

// (If we wanted to be more clear/specific we could say
```
ON (game.id=goal.matchid)
```

_

// ex, show the player, teamid, stadium and mdate for every German goal
```
SELECT player,teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
  WHERE teamid = 'GER'
```


_

// ex, Show the team1, team2 and player for every goal scored by a player called Mario player LIKE 'Mario%'
```
SELECT team1, team2, player
FROM goal JOIN game ON (goal.matchid=game.id)
WHERE player LIKE 'Mario %'
```

_

// ex, Show player, teamid, coach, gtime for all goals scored in the first 10 minutes gtime<=10
```
SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam ON (teamid = id)
 WHERE gtime<=10
 ```


_

// ex, Show the stadium and the number of goals scored in each stadium.
```
SELECT stadium, COUNT(matchid)
FROM goal JOIN game ON (matchid = id)
GROUP BY stadium
```

_

// ex, For every match involving 'POL', show the matchid, date and the number of goals scored
```
SELECT matchid, mdate, COUNT(teamid)
FROM goal JOIN game ON (matchid=id)
WHERE team1 = 'POL' OR team2 = 'POL'
GROUP BY matchid, mdate
```
// Note that because of the COUNT(teamid) we must GROUP BY matchid, and mdate (since mdate has dates that overlap)

//I'm assuming that when using COUNT with JOINed tables, a GROUP BY must be defined for each table



