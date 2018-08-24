postgreSQL
==========

(docs)[https://www.tutorialspoint.com/postgresql/index.htm]


### username, password

username: 'slimbean'
password: ''


---



### CLI information

```
  \d[S+]                 list tables, views, and sequences

  \d[S+]  NAME           describe table, view, sequence, or index

  \da[S]  [PATTERN]      list aggregates
  \db[+]  [PATTERN]      list tablespaces

  \dt[S+] [PATTERN]      list tables
  \dT[S+] [PATTERN]      list data types

  \dv[S+] [PATTERN]      list views
  \dE[S+] [PATTERN]      list foreign tables

  \l[+]   [PATTERN]      list databases

```

### CLI input/output

```
Input/Output
  \copy ...              perform SQL COPY with data stream to the client host
  \echo [STRING]         write string to standard output
  \i FILE                execute commands from file
  \ir FILE               as \i, but relative to location of current script
  \o [FILE]              send all query results to file or |pipe
  \qecho [STRING]        write string to query output stream (see \o)
  ```

### Other CLI commands

\q // quit

\c databasename // to use databasename

psql databasename // enter specific psql database

psql -U vagrant -d template1 // start postgreSQL with username and database





----------


pg (ruby)
---------

gem install pg

(manual)[https://deveiate.org/code/pg/index.html]

### connect

(connect docs)[https://deveiate.org/code/pg/PG/Connection.html#method-c-new]








































