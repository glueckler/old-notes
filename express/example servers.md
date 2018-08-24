Examples
========

//ex - basic build - https://scotch.io/tutorials/use-ejs-to-template-your-node-application


------



Example
---

// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');



------------------------------------------------------------------



basic express server
--------------------

//ex
const app = require('express')();
var PORT = process.env.PORT || 8080;

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.end("Hello!");
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
})

app.get("/hello", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});



--------------------------------------------------------------




An Example of a simple blog
---------------------------




### ejs

//ex - define a template
```
<!-- views/partials/footer.ejs -->
<footer class="footer">
    <p>&copy; 90210 Lawyer Stuff.</p>
</footer>
```




### app.js

// ex from - https://coligo.io/templating-node-and-express-apps-with-ejs/

// Rendering Views with Node, Express, and EJS


```
//ex
/* app.js */

// require and instantiate express
const app = require('express')()


// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  }
]


// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})
// we are excluding the views/ part of the path because
// Express will default to looking in that folder
// also exclude the .ejs extension


// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]


  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080')
```


------------

// The posts array is used to mimic a database for our blog which we will query based on the post ID

// We use app.set('view engine', 'ejs') to tell express to use EJS as our templating engine

// Express will automatically look inside the views/ folder for template files

// The res.render() method is used to render the view we pass it and send the HTML to the client




















