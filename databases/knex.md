knex
====

(docs)[http://knexjs.org/#Installation-node]
(demo)[https://github.com/lankypete/knex-demo]
(more notes)[https://github.com/lankypete/knex-notes]


### install


// install the knex library, and then install the appropriate database library:

// pg for PostgreSQL,

// mysql for MySQL

// or MariaDB, sqlite3 for SQLite3,

// or mssql for MSSQL

```
$ npm install knex --save

# Then add one of the following (adding a --save) flag:
$ npm install pg
$ npm install sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install mariasql
$ npm install strong-oracle
$ npm install oracle
$ npm install mssql
```


---------------------------------------


### initialize

// The connection options are passed directly to the appropriate database client to create the connection, and may be either an object, or a connection string

// ex, using an object
```javascript
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
```


// ex, using a string
```javascript
var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});
```



------------------------------------------


Query Builder
-------------


### debuggin in REPL

// inside node..
```javascript
const db = require('knex')({
  client: 'pg',
  connection: {
    database: 'swifswap',
    user: 'slimbean',
    password: ''
  }
})
```

### toString()

// this is fucking huge in debugging
```javascript
console.log(
  await db.insert({
  name,
  description
})
  .into('items')
  .toString())
```


---

### syntax

```
knex - knex(tableName, options={only: boolean}) / knex.[methodName]

timeout — .timeout(ms, options={cancel: boolean})
```

// ex
```javascript
knex.select().from('books').timeout(1000)
// Outputs:
// select * from `books`
```

```
select — .select([*columns])

as — .as(name)

column — .column(columns)

from — .from([tableName], options={only: boolean})

with — .with(alias, function|raw)

withSchema — .withSchema([schemaName])
```

// ex
```javascript
knex.select('title', 'author', 'year').from('books')
Outputs:
select `title`, `author`, `year` from `books`
```

// ex
```javascript
knex.select().table('books')
Outputs:
select * from `books`
```

// ex
```javascript
knex.avg('sum_column1').from(function() {
  this.sum('column1 as sum_column1').from('t1').groupBy('column1').as('t1')
}).as('ignored_alias')

Outputs:
select avg(`sum_column1`) from (select sum(`column1`) as `sum_column1` from `t1` group by `column1`) as `t1`
```

// ex
```javascript
knex.column('title', 'author', 'year').select().from('books')
Outputs:
select `title`, `author`, `year` from `books`
```


// ex
```javascript
knex.column(['title', 'author', 'year']).select().from('books')
Outputs:
select `title`, `author`, `year` from `books`
```


// ex
```javascript
knex.with('with_alias', knex.raw('select * from "books" where "author" = ?', 'Test')).select('*').from('with_alias')
Outputs:
with `with_alias` as (select * from "books" where "author" = 'Test') select * from `with_alias`
```


// ex
```javascript
knex.withSchema('public').select('*').from('users')
Outputs:
select * from `public`.`users`
```


// ex
```javascript
knex.with('with_alias', (qb) => {
  qb.select('*').from('books').where('author', 'Test')
}).select('*').from('with_alias')
Outputs:
with `with_alias` as (select * from `books` where `author` = 'Test') select * from `with_alias`
```




--------------------------------------------



Promises Interfaces
-------------------

// ex
```javascript
knex.select('name')
.from('users')
.where('id', '>', 20)
.andWhere('id', '<', 200)
.limit(10)
.offset(x)
.then(function(rows) {
  return _.pluck(rows, 'name');
})
.then(function(names) {
  return knex.select('id').from('nicknames').whereIn('nickname', names);
})
.then(function(rows) {
  console.log(rows);
})
.catch(function(error) {
  console.error(error)
});
```



------

```
then — .then(onFulfilled, [onRejected])

// ex

knex.select('*')
.from('users')
.where({name: 'Tim'})
.then(function(rows) {
  return knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');
})
.then(function(id) {
  console.log('Inserted Account ' + id);
})
.catch(function(error) { console.error(error); });
```

```
catch — .catch(onRejected)

//Coerces the current query builder into a promise state, catching any error thrown by the query, the same as calling .then(null, onRejected)

// ex

return knex.insert({id: 1, name: 'Test'}, 'id')
.into('accounts')
.catch(function(error) {
  console.error(error);
}).then(function() {
  return knex.select('*')
    .from('accounts')
    .where('id', 1);
}).then(function(rows) {
  console.log(rows[0]);
})
.catch(function(error) {
  console.error(error);
});
```

// other interface options

```
tap — .tap(sideEffectHandler)

map — .map(mapper)

reduce — .reduce(reducer, [initialValue])

bind — .bind(context)

return — .return(value)
```





--------------------------------------------------



Migration
---------

(blog post)[https://alexzywiak.github.io/running-migrations-with-knex/]

npm install knex -g

// To create a new knexfile, run the following

knex init

//will set up a knexfile.js to hold configuration options

// ex
```javascript
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'w4d2',
      user:     'slimbean',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
```

---

// use the migration tool to create migration files to the specified directory (default migrations)

// Creating new migration files can be achieved by running:

```
knex migrate:make migration_name
```


---


// Once you have finished writing the migrations, you can update the database matching your NODE_ENV  by running:
```
knex migrate:latest
```

// You can also pass the --env flag or set NODE_ENV to select an alternative environment:
```
$ knex migrate:latest --env production

# or

$ NODE_ENV=production knex migrate:latest
```

---

// To rollback the last batch of migrations:
```
knex migrate:rollback
```



------------------------------------------


Seeds
-----

// When you run knex..
```
seed:make <name>
```

// you will create a template file in the seeds directory..

// ex,
```
knex seed:make 01_users
```

// the number can be used to organize knex files if you'd like them to run in a particular order

// or
```
knex seed:make 07_chats
```


---

// users.js
```
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, email: 'first@user.com', password: '123456'}),
        knex('users').insert({id: 2, email: 'second@user.com', password: '123456'})
      ]);
    });
};
```

---

// urls.js
```
exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function () {
      return Promise.all([
        knex('urls').insert({id: 1, short: 'abc', long: 'http://www.google.com/', user_id: 1}),
        knex('urls').insert({id: 2, short: 'def', long: 'http://www.duckduckgo.com/', user_id: 1}),
        knex('urls').insert({id: 3, short: 'ghi', long: 'http://www.bing.com/', user_id: 2}),
        knex('urls').insert({id: 4, short: 'jkl', long: 'http://www.yahoo.com/', user_id: 2}),
        knex('urls').insert({id: 5, short: 'mno', long: 'http://www.ask.com/', user_id: 2})
      ]);
    });
}
```

In order to seed the database you would run..
```
knex seed:run
```











































