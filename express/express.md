express
=======




steps
-----
0. packages
npm i express ejs

1. require express
var express = require('express')
var app = express()

2. add route to home page
app.get('/', function (req, res) {
  res.send('Hello World')
})

3. define port
app.listen(3000)

4. define view engine
app.set('view engine', 'ejs');

5. define static
app.use(express.static('public'))





-----------------------------------



express variables
-----------------

// global

app.locals

// responce

res.locals

// render

templateVars




--------------------------------------------





express routing
---------------
routing - http://expressjs.com/en/guide/routing.html



### Basic routing


app.METHOD(PATH, HANDLER)


// app is an instance of express.

// METHOD is an HTTP request method, in lowercase.

// PATH is a path on the server.

// HANDLER is the function executed when the route is matched.

---

// Express supports the following routing methods that correspond to HTTP methods: get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch and search

---

### ALL

// This method is used for loading middleware functions at a path for all request methods.
//In the following example, the handler will be executed for requests to “/secret” whether you are using GET, POST, PUT, DELETE, or any other HTTP request

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})


---


### GET

app.get("/", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n");
});


//ex
app.get("/urls/:id", (req, res) => {
  let templateVars = { shortURL: req.params.id };
  res.render("urls_show", templateVars);
});


---


### GET json

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
})


-


### POST

app.post("/urls", (req, res) => {
  console.log(req.body);  // debug statement to see POST parameters
  res.send("Ok");         // Respond with 'Ok' (we will replace this)
});




---

Route Parameters
---

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL.

// The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

// Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes

// ex

Route path: /users/:userId/books/:bookId

Request URL: http://localhost:3000/users/34/books/8989

req.params: { "userId": "34", "bookId": "8989" }

// ex

Route path: /flights/:from-:to

Request URL: http://localhost:3000/flights/LAX-SFO

req.params: { "from": "LAX", "to": "SFO" }

// ex

Route path: /plantae/:genus.:species

Request URL: http://localhost:3000/plantae/Prunus.persica

req.params: { "genus": "Prunus", "species": "persica" }


---


// To define routes with route parameters simply specify the route parameters in the path of the route as shown below...

```javascript
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```




-----


Response Methods
---

res.download()  Prompt a file to be downloaded.
res.end()       End the response process.
res.json()      Send a JSON response.
res.jsonp()     Send a JSON response with JSONP support.
res.redirect()  Redirect a request.
res.render()    Render a view template.
res.send()      Send a response of various types.
res.sendFile()  Send a file as an octet stream.
res.sendStatus()  Set the response status code and send its string representation as the response body.


Render
---
res.render()
ejs.render(str, data, options);
// => Rendered HTML string

//ex
app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});






---------------------------------------------------------------------




static files
------------

// such as css files or front end javscript files


.static()
---
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express

express.static(root, [options])

// ex

app.use(express.static('public'))

// Now, you can load the files that are in the public directory

http://localhost:3000/images/kitten.jpg

http://localhost:3000/css/style.css

http://localhost:3000/js/app.js

http://localhost:3000/images/bg.png

http://localhost:3000/hello.html





------------------------------------------------------------------



access variable and post as list
--------------------------------


// The <%= %> is used to output the value of a JavaScript variable onto the page

```
<!-- views/home.ejs -->
...

<div class="list-group">
  <!-- loop over blog posts and render them -->
  <% posts.forEach((post) => { %>
    <a href="/post/<%= post.id %>" class="list-group-item">
      <h4 class="list-group-item-heading"><%= post.title %></h4>
      <p class="list-group-item-text"><%= post.author %></p>
    </a>
  <% }) %>
</div>

...
```


-------------


```
<!-- views/post.ejs -->
...

<div>
    <h2><%= title %></h2>
    <p>by <a href="#"><%= author %></a></p>

    <p><%= body %></p>
    <hr>
</div>

...

```














