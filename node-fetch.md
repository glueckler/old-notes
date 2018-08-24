node-fetch
==========

(npm)[https://www.npmjs.com/package/node-fetch]

npm install node-fetch --save

// plain text or html
```javascript
fetch('https://github.com/')
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        console.log(body);
    });
```


---


// json
```javascript
fetch('https://api.github.com/users/github')
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
```


---

// post

```javascript
fetch('http://httpbin.org/post', { method: 'POST', body: 'a=1' })
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
```

---

// post with form-data (detect multipart)
```javascript
var FormData = require('form-data');
var form = new FormData();
form.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: form })
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
```

---

// post with form-data (custom headers)
// note that getHeaders() is non-standard API
```javascript
var FormData = require('form-data');
var form = new FormData();
form.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: form, headers: form.getHeaders() })
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
 ```


















