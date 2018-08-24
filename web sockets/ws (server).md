ws (server) WebSocket
---------------------

// This module does not work in the browser

(github)[https://github.com/websockets/ws]


### connection and disconnection

```javascript
wss.on('connection', (socket) => {
  console.log('Client connected');

    // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  socket.on('close', () => console.log('Client disconnected'));
});
```


---


### WebSocket Compression

// The extension is disabled by default on the server and enabled by default on the client

// we suggest to enable it only if it is really needed

// The client will only use the extension if it is supported and enabled on the server.

// To always disable the extension on the client set the perMessageDeflate option to false

```javascript
const WebSocket = require('ws');

const ws = new WebSocket('ws://www.host.com/path', {
  perMessageDeflate: false
});
```


---


### Errors

// Error handling best practices

```javascript
// If the WebSocket is closed before the following send is attempted
ws.send('something');

// Errors (both immediate and async write errors) can be detected in an optional
// callback. The callback is also the only way of being notified that data has
// actually been sent.
ws.send('something', function ack(error) {
  // If error is not defined, the send has been completed, otherwise the error
  // object will indicate what failed.
});

// Immediate errors can also be handled with `try...catch`, but **note** that
// since sends are inherently asynchronous, socket write failures will *not* be
// captured when this technique is used.
try { ws.send('something'); }
catch (e) { /* handle error */ }
```


---


### examples


// ex, server
```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
```



---------------------------------



// ex, Express.js
```javascript
const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(function (req, res) {
  res.send({ msg: "hello" });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
```




--------------------------------------




### example broadcasting messages



```javascript
const express = require('express');
const http = require('http');
const ws = require('ws');

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);
const wss = new ws.Server({server});

function broadcast(data) {
  wss.clients.forEach((client) => {
    //  maybe switch ws.OPEN with 1, this is the connection status
    if (client.readyState === ws.OPEN) {
      client.send(data);
    }
  });
}

wss.on('connection', (socket) => {

  socket.on('message', (data) => {
    broadcast(data);
  });

});

server.listen(8081, function listening() {
  console.log('Listening on %d', server.address().port);
});
```



-----------------------



// ex, another broadcast example
```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
```












