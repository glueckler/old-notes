Koa
---


npm i koa

### helloworld

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```



Errors
------

(github error docs)[https://github.com/koajs/koa/wiki/Error-Handling]

### catch errors

// ex,
```javascript
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});
```


### throw errors

```javascript
//This will set status and message.
app.use(async (ctx, next) => {
  //will log the error as `InternalServerError: Error Message` and will return `Internal Server Error` as the response body
  ctx.throw(500,'Error Message');
});
app.use(async (ctx, next) => {
  //will NOT log the error and will return `Error Message` as the response body with status 400
  ctx.throw(400,'Error Message');
});

app.use(async (ctx, next) => {
  //This will log the error as `Error: Error Message` and will return `Internal Server Error` as the response body
  throw new Error('Error Message');
});
```








