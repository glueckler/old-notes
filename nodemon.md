nodemon
=======

npm install -g nodemon

### nodemon cli

-h

// use -h to see help for nodemon

### package.json

// npm run dev

```javascript
"scripts": {
  "dev": "nodemon server.js localhost 9999"
}
```


### debug

```javascript
nodemon --debug ./server.js 80
```

### delay

```javascript
nodemon --delay 10 server.js
```

### watch

// by default nodemon monitors the current working directory

```javascript
nodemon --watch app --watch libs app/server.js
```

### file extensions

// By default, nodemon looks for files with the .js, .coffee, .litcoffee, and .json extensions

// you can specify your own list with the -e (or --ext) switch like so:

```javascript
nodemon -e js,jade
```

### ignore

// ex, directories
```javascript
nodemon --ignore lib/ --ignore tests/
```

// files
```javascript
nodemon --ignore lib/app.js
```

// patterns
```javascript
nodemon --ignore 'lib/*.js'
```







------------------------------------









### nodemon as aa required module

(docs)[https://github.com/remy/nodemon/blob/master/doc/requireable.md]

// ex

```javascript
var nodemon = require('nodemon');

nodemon({
  script: 'app.js',
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});
```

---

### arguments

(config)[https://github.com/remy/nodemon#config-files]

// The nodemon function takes either an object (that matches the nodemon config)

// A config file can take any of the command line arguments as JSON key values

// ex
```javascript
{
  "verbose": true,
  "ignore": ["*.test.js", "fixtures/*"],
  "delay": "2500",
  "watch": "app",
  "execMap": {
    "rb": "ruby",
    "pde": "processing --sketch={{pwd}} --run"
  }
}
```

// or can take a string that matches the arguments that would be used on the command line..

// ex
```javascript
var nodemon = require('nodemon');

nodemon('-e "js json" app.js');
```


---

### Event handling


This is simply the event emitter bus that exists inside nodemon exposed at the top level module (ie. it's the events api):
```javascript
nodemon.on(event, fn)

nodemon.addListener(event, fn)

nodemon.once(event, fn)

nodemon.emit(event)

nodemon.removeAllListeners([event])
```

---

// states
```javascript
start - child process has started

crash - child process has crashed (nodemon will not emit exit)

exit - child process has cleanly exited (ie. no crash)

restart([ array of files triggering the restart ]) - child process has restarted

config:update - nodemon's config has changed
```

---

// ex
```javascript
var nodemon = require('nodemon');

nodemon({ script: 'app.js' }).on('start', function () {
  console.log('nodemon started');
}).on('crash', function () {
  console.log('script crashed for some reason');
});

// force a restart
nodemon.emit('restart');

// force a quit
nodemon.emit('quit');
```




---


