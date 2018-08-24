WebSocket (client side)
-----------------------

(MDN)[https://developer.mozilla.org/en-US/docs/Web/API/WebSocket]
(MDN example) [https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications]

### create WebSocket

url -> 'ws://localhost:8080'

var socket = new WebSocket(url, [protocal] )


-------------------


### websocket event listeners

open

socket.onopen

// This event occurs when socket connection is established.

```javascript
socket.addEventListener('open', function (event) { }
```

```javascript
ws.onmessage = function (evt)
{
   var received_msg = evt.data;
   alert("Message is received...");
};
```

---

message

socket.onmessage

// This event occurs when client receives data from server.

---

error

socket.onerror

// This event occurs when there is any error in communication.

---

close

socket.onclose

// This event occurs when connection is closed.



-------------------------------



### websocket methods



socket.send()

// The send(data) method transmits data using the connection.

---

socket.close()

The close() method would be used to terminate any existing connection.



---------------------------------



### sending JSON


// Using JSON to transmit objects

One handy thing you can do is use JSON to send reasonably complex data to the server.

// For example, a chat program can interact with a server using a protocol implemented using packets of JSON-encapsulated data:



```javascript
// Send text to all users through the server
function sendText() {
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id:   clientID,
    date: Date.now()
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}
```




---------------------------------



### example

```javascript
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```



------------------------------------


### example


```
<!DOCTYPE HTML>
<html>
   <head>

      <script type="text/javascript">
         function WebSocketTest()
         {
            if ("WebSocket" in window)
            {
               alert("WebSocket is supported by your Browser!");

               // Let us open a web socket
               var ws = new WebSocket("ws://localhost:9998/echo");

               ws.onopen = function()
               {
                  // Web Socket is connected, send data using send()
                  ws.send("Message to send");
                  alert("Message is sent...");
               };

               ws.onmessage = function (evt)
               {
                  var received_msg = evt.data;
                  alert("Message is received...");
               };

               ws.onclose = function()
               {
                  // websocket is closed.
                  alert("Connection is closed...");
               };

               window.onbeforeunload = function(event) {
                  socket.close();
               };
            }

            else
            {
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
         }
      </script>

   </head>
   <body>

      <div id="sse">
         <a href="javascript:WebSocketTest()">Run WebSocket</a>
      </div>

   </body>
</html>
```








