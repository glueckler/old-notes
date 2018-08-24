express midleware
-----------------



### body-parser

// The body-parser library will allow us to access POST request parameters, such as req.body.longURL

npm install body-parser

// add the following to server app

```javascript
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
```

// urlencoded is the standard post submission query strings data

// it is still submitted through the body

//ex - access body parameters
```javascript
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password); //==========> the email and password set in form
  res.redirect('register');
});
```




---------------------------------------------------------------------




### method-override

//middleware which can change the type of request

//ex - change the POST request of a form to a delete request

//html

```
// use a query string with key _method to change desired request

<form method="POST" action="/urls/<%= url %>?_method=delete">
  <button name="delete-url" value="submit">Delete</button>
</form>
```

// server
```
app.use(methodOverride('_method'))

app.delete("/urls/:id", (req, res) => {
  const id = req.params.id;
  delete urlDatabase[id];
  res.redirect("/urls");
});
```




-----------------------------------------------------------------------



### loggers

### morgan

(docs)[https://www.npmjs.com/package/morgan]

npm install morgan

// HTTP request logger middleware for node.js

```javascript
var morgan = require('morgan')

// Load the logger first so all (static) HTTP requests are logged to STDOUT

// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes,
//         cyan for redirection codes, and uncolored for all other codes.

app.use(morgan('dev'))

```

// or

app.use(morgan('tiny'))

---

### knex logger

// remember to use them only in development mode


```
if (ENV === 'development') {
  const morgan = require('morgan');
  const knexLogger = require('knex-logger');
    // Load the logger first so all (static) HTTP requests are logged to STDOUT
  // 'dev' = Concise output colored by response status for development use.
  //         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
  app.use(morgan('dev'));

  // Log knex SQL queries to STDOUT as well
  app.use(knexLogger(knex));
}
```


-----------------------------------------------------------------------



### connect-flash

npm install connect-flash


// Flash messages are stored in the session.

// First, setup sessions as usual by enabling cookieParser and session middleware

```javascript
var flash = require('connect-flash');
var app = express();

app.configure(function() {
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
});
```


---


// With the flash middleware in place, all requests will have a req.flash() function that can be used for flash messages.

```javascript
app.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('info', 'Flash is back!')
  res.redirect('/');
});

app.get('/', function(req, res){
  // Get an array of flash messages by passing the key to req.flash()
  res.render('index', { messages: req.flash('info') });
});
```












