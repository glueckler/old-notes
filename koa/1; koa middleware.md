Middleware
----------

### body parser

npm i koa-bodyparser

```javascript
const bodyParser = require('koa-bodyparser')
```


---



### logger

npm i koa-logger

```javascript
const logger = require('koa-logger')
```


---



### simple router

npm i koa-simple-router

(simple router)[https://www.npmjs.com/package/koa-simple-router]

```javascript
const router = require('kos-simple-router')
```

```javascript
app.use(router({ prefix: '/api' }, _ => {
  _.get('/:user/id', (ctx, next) => {

  })
  _.post('/:user/id', (ctx, next) => {

  })
}))
```


---


### router

npm i koa-router

(koa router)[https://www.npmjs.com/package/koa-router]

// basic

```javascript
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
  // ctx.router available
});

app
  .use(router.routes())
  .use(router.allowedMethods());
```


// Router prefixes

// Route paths can be prefixed at the router level:
```javascript
var router = new Router({
  prefix: '/users'
});

router.get('/', ...); // responds to "/users"
router.get('/:id', ...); // responds to "/users/:id"
```



---


### body-parser


npm install koa-body


```javascript
const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());
app.use(ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});

app.listen(3000);
```


// if using with koa-router, it's generally better to only parse bodies as needed
```javascript
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-body');

router.post('/users', koaBody(),
  (ctx) => {
    console.log(ctx.request.body);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
  }
);

app.use(router.routes());

app.listen(3000);
console.log('curl -i http://localhost:3000/users -d "name=test"');
```



























