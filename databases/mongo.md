Mongo DB
========

gist example - https://gist.github.com/lankypete/b6370a4b542b20db4b62113721cd7670


//A Document Database

//Structure..

Database > Collections > Documents




-------------------------------------------------------------------


## Shell

shell quick docs - https://docs.mongodb.com/v3.0/reference/mongo-shell/#command-helpers
shell docs - https://docs.mongodb.com/manual/reference/method/

shell basic's - https://docs.mongodb.com/manual/mongo/


### Basic shell setup (brew)

//If you have installed mongodb through homebrew then you can simply start mongodb through..

  brew services start mongodb

//Then access the shell by

  mongo

//You can shut down your db by

  brew services stop mongodb

//For more options

  brew info mongodb


---

### Select database

use DBName

//will create that db once data is inserted, or switch to it


db

//To display the database you are using, type db:


show collections

//might show collections i dunno?

---

### print to console

//db refers to the current database.
//myCollection is the name of the collection

//ex
db.tweets.find().pretty()

_

db.myCollection.insertOne( { x: 1 } );
//insert document {x: 1}

db.myCollection.find().pretty()
//pretty prints entire collection

_

db.getCollection()
//useful if shell doesn't accept name like 4-name (hyphens or spaces in name)

//ex
db.getCollection('tweets').find().pretty()


---

### modify

db.collection.update()
//Modifies a document in a collection.

db.collection.updateOne()
//Modifies a single document in a collection.

db.collection.updateMany()
//Modifies multiple documents in a collection.

//syntax
```javascript
db.collection.updateMany(
   <filter>,
   <update>,
   {
     upsert: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }
)
```

-

//ex
```
db.tweets.updateMany( {}, {$set: {"Likes": 0}} )
```

_

//ex
```javascript
try {
   db.restaurant.updateMany(
      { violations: { $gt: 4 } },
      { $set: { "Review" : true } }
   );
} catch (e) {
   print(e);
}
```


---

### deleting

db.collection.deleteOne()
//Deletes a single document in a collection.

db.collection.deleteMany()
//Deletes multiple documents in a collection.

db.collection.drop()
//Removes the specified collection from the database.

db.collection.dropIndex()
//Removes a specified index on a collection.

db.collection.dropIndexes()
//Removes all indexes on a collection.

db.collection.remove()
//Deletes documents from a collection.



----------------------------------------------------------------------



node
====

//Install the MongoDB driver in your project:

npm install mongodb --save



## Connecting

//ex - a connection that doesn't do much

"use strict";

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> In typical node-callback style, any program
  //     logic that needs to use the connection needs
  //     to be invoked from within here.
  //
  // Another way to say: this is an "entry point" for
  // a database-connected application!

  // ==> At the end, we close the connection:
  db.close();
});




---------------------




CRUD Operations (node)
----------------------

docs - https://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/

---

read data
---------

### .find()

// .find()

// can be left empty to find all

_

//ex, Find all documents in the customers collection:
```javascript
db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });```

_

// ex, Return the fields "name" and "address" of all documents in the customers collection:

```javascript
db.collection("customers").find({}, { _id: false, name: true, address: true }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });```


---


// .findOne()

```javascript
db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });```


---

NOTE: javascript ids are inserted as ObjectID, which requires the ObjectID constructor..


```javascript
var ObjectId = require('mongodb').ObjectID;

var get_by_id = function(id, callback) {
  console.log("find by: "+ id);
  get_collection(function(collection) {
    collection.findOne({"_id": new ObjectId(id)}, function(err, doc) {
       callback(doc);
    });
  });
}```


---



//The cursor returned by the find method has several methods that allow for chaining of options for a query

//Once the query is ready to be executed you can retrieve the documents using the next, each and toArray

//If the query returns many documents it’s preferable to use the next or each methods, as the toArray method will materialize all the documents into memory before calling the callback function


//simply
```javascript
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var col = db.collection('databaseName');

  // Get first two documents that match the query
  col.find({a:1}).limit(2).toArray(function(err, docs) {
        assert.equal(null, err);
        assert.equal(2, docs.length);
        db.close();
      });

});```

---

### search a database


// ==> Let's "get all the tweets". In Mongo-speak, we "find" them.
db.collection("tweets").find({}, (err, result) => {
  // Lazy error handling:
  if (err) throw err;

  // ==> Fair warning: This is going to log a lot of stuff...
  console.log("find result: ", result);
  console.log("type of find result: ", typeof result);

  // ==> This is inside this callback now. Think about it:
  // This is now the "end of the program", right?.
  db.close();
});


_


### looping results

//NOTE: once you've iterated over a cursor, if you try to iterate over it again, you'll get an error like "cursor exhausted".
//This is because no reference is kept to the items—this is the meaning of "get results one at a time".
//Using the Cursor rather than slurping data into an array would be better in some cases if you had a ton of data

//ex

// Let's "get all the tweets". In Mongo-speak, we "find" them.
db.collection("tweets").find({}, (err, results) => {
  if (err) throw err;

  // ==> So we Read The Fantastic Manual, right?

  // ==> We can iterate on the cursor to get results, one at a time:
  console.log("for each item yielded by the cursor:");
  results.each((err, item) => console.log("  ", item));

  // This is the end...
  db.close();
});


_


### Build an Array


//An alternative to iterating over the cursor (results.each()): we can instead just slurp all of the items into an array, and then work with them.
//Note that this takes up memory, since all of the results are loaded up at once before any work happens

//ex

// ==> We could instead just slurp the items into an array:
results.toArray((err, resultsArray) => {
  if (err) throw err;

  console.log("results.toArray:", resultsArray);
});






------------------------------------------------------------------




Update Methods
--------------

.updateOne()

.updateMany()

//ex
```javascript
db.collection.updateOne(
   <filter>, //{ "name" : "Central Perk Cafe" }
   <update>, //{ $set: { "violations" : 3 } }
   {
     upsert: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }
)
```

---

### update operators

(docs)[https://docs.mongodb.com/manual/reference/operator/update/]

$currentDate  //Sets the value of a field to current date, either as a Date or a Timestamp.

$inc  //Increments the value of the field by the specified amount.

$min  //Only updates the field if the specified value is less than the existing field value.

$max  //Only updates the field if the specified value is greater than the existing field value.

$mul  //Multiplies the value of the field by the specified amount.

$rename //Renames a field.

$set  //Sets the value of a field in a document.

$setOnInsert  //Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.

$unset // Removes the specified field from a document.




---

### example

```javascript
. . .

var col = db.collection('updates');
// Insert a single document
col.insertMany([{a:1}, {a:2}, {a:2}], function(err, r) {
  assert.equal(null, err);
  assert.equal(3, r.insertedCount);

  // Update a single document
  col.updateOne({a:1}, {$set: {b: 1}}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.matchedCount);
    assert.equal(1, r.modifiedCount);

    // Update multiple documents
    col.updateMany({a:2}, {$set: {b: 1}}, function(err, r) {
      assert.equal(null, err);
      assert.equal(2, r.matchedCount);
      assert.equal(2, r.modifiedCount);

      // Upsert a single document
      col.updateOne({a:3}, {$set: {b: 1}}, {
        upsert: true
      }, function(err, r) {
        assert.equal(null, err);
        assert.equal(0, r.matchedCount);
        assert.equal(1, r.upsertedCount);
        db.close();
      });
    });
  });
});
```






------------------------------------------------------------------




Write Methods
-------------


.insertOne()

.insertMany()

//r stands for result within callback (Contains the result document from MongoDB)

//ex
```javascript
. . .

  // Insert a single document
  db.collection('inserts').insertOne({a:1}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);

    // Insert multiple documents
    db.collection('inserts').insertMany([{a:2}, {a:3}], function(err, r) {
      assert.equal(null, err);
      assert.equal(2, r.insertedCount);

      db.close();
    });
  });
});
```


// OR WITH ES6

```javascript
. . .

  // Insert a single document
  var r = yield db.collection('inserts').insertOne({a:1});
  assert.equal(1, r.insertedCount);

  // Insert multiple documents
  var r = yield db.collection('inserts').insertMany([{a:2}, {a:3}]);
  assert.equal(2, r.insertedCount);

  // Close connection
  db.close();
}).catch(function(err) {
  console.log(err.stack);
});
```




----------------------------



example
-------

//ex - get Tweets function wrapped making use of closure on the db
```javacript
"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // We have a connection to the "tweeter" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> Refactored and wrapped as new, tweet-specific function:

  function getTweets(callback) {
    db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets);
    });
  }

  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:");
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  });

});
```



------


//NOTE
//This callback is entirely pointless if you think about it:
```javascript
function getTweets(callback) {
  db.collection("tweets").find().toArray((err, tweets) => {
    if (err) {
      return callback(err);
    }
    callback(null, tweets);
  });
}
```

//You could instead do this:
```javascript

function getTweets(callback) {
  db.collection("tweets").find().toArray(callback);
}

//...and it would behave exactly the same. It's included specifically to bring this point up. Though you might use the longer version if you wanted to include some extra logging, or if you could handle the error in a useful way.
```
















