Cookies
-------

// remember the express midleware cookie-parser!!



### cookie-parser

// serves as Express middleware that facilitates working with cookies.

const cookieParser = require('cookie-parser')
app.use(cookieParser())


---


### set cookie ( res.cookie(name, value[, ... ]) )


res.cookie(name, value [, options])

//Sets cookie name to value. The value parameter may be a string or object converted to JSON.
//The options parameter is an object that can have the following properties

//ex
res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });


---

### clear cookie (res.clearCookie(name) )


res.clearCookie(name [, options])


//ex
res.cookie('name', 'tobi', { path: '/admin' });
res.clearCookie('name', { path: '/admin' });


---


### Using Cookies (req.cookies)

//the request object has a cookies property

// in server
```javascript
app.use( (req, res) => {
  const { username } = req.cookies;
  res.locals = username;
})
```


// in template

// inside a template, res.locals.username ==> username
```javascript
<% if(!username) {%>
 <form autocomplete="off" action="/login" method="POST">
   <input type="text" name="username">
   <input type="submit" name="submit">
 </form>
<%}%>
```




------------------------------------------




cookie-session
--------------


documentation - https://github.com/expressjs/cookie-session


### config

//ex

```javascript
const cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  secret: process.env.SESSION_SECRET,  //<===== .env file
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
```




----------------------------------------------------



### check a cookie


// ex

```javascript
app.use((req, res, next) => {
  const { userId } = req.session;
  if ( userId ) {
    res.locals.user = getUserById( userId );
  }

  res.locals.randomColor = randomColor();

  next();

});
```


-----------------------------------------------------


### login

//ex - login

```javascript
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = loginUser(email, password);

  if( user ) {
    req.session.userId = user.id;
    res.redirect('/urls');
  } else {
    res.redirect('/login?error=Invalid login information')
  }


});
```





--------------------



### logout

//ex
```javascript
app.post("/logout", (req, res) => {
  req.session.userId = null;
  res.redirect('/urls');
});
```









