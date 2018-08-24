Create
------


// Insert a record (the Create operation in CRUD)

// 2 ways

// The first way specifies both the column names and the values to be inserted:
```
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

// If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.

//However, make sure the order of the values is in the same order as the columns in the table.
```
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

---


// ex

```
INSERT INTO users (full_name, username)
VALUES ("Boris Hadjur", "_DreamLead");
```



// ex, Insert a single row into table films
```
INSERT INTO films VALUES
    ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');
```



// In this example, the len column is omitted and therefore it will have the default value:
```
INSERT INTO films (code, title, did, date_prod, kind)
    VALUES ('T_601', 'Yojimbo', 106, '1961-06-16', 'Drama');
```



//This example uses the DEFAULT clause for the date columns rather than specifying a value:
```
INSERT INTO films VALUES
    ('UA502', 'Bananas', 105, DEFAULT, 'Comedy', '82 minutes');
INSERT INTO films (code, title, did, date_prod, kind)
    VALUES ('T_601', 'Yojimbo', 106, DEFAULT, 'Drama');
```



// To insert a row consisting entirely of default values
```
INSERT INTO films DEFAULT VALUES;
```



// To insert multiple rows using the multirow VALUES syntax:
```
INSERT INTO films (code, title, did, date_prod, kind) VALUES
    ('B6717', 'Tampopo', 110, '1985-02-10', 'Comedy'),
    ('HG120', 'The Dinner Game', 140, DEFAULT, 'Comedy');
```

---------------------------------------------------------------
