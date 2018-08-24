package.json
------------

npm install


scripts dependencies
--------------------


### postcss-cli

(docs)[https://www.npmjs.com/package/postcss-cli]

(config)[https://www.npmjs.com/package/postcss-load-config]

npm i -g postcss-cli

// usage

```
postcss [input.css] [OPTIONS] [-o|--output output.css] [-w|--watch]
```


// sripts from another directory
```
npm start --prefix path/to/your/app
```

ex,
```
"dev": "npm run dev --prefix ./server"
```



------



### concat-cli

npm install -g concat-cli

// Just a simple wrapper around the concat module, to concatenate files via the command line

// Pass the files to concatenate (-f or --files parameter) to the tool, and optionally and destination file (-o or --output parameter):

```
concat-cli -f *.js -o bundle.js
```

---

### rework-npm-cli


// ex, piping to other commands
```
\rework-npm source.css | myth | cleancss -o bundle.css\
```


---

### chokidar-cli

(docs)[https://github.com/kimmobrunfeldt/chokidar-cli]

npm install chokidar-cli

// Fast cross-platform command line utility to watch file system changes


---


### parallelshell

This is a super simple npm module to run shell commands in parallel.

All processes will share the same stdout/stderr, and if any command exits with a non-zero exit status, the rest are stopped and the exit code carries through


---

### npm-run-all

(docs)[https://www.npmjs.com/package/npm-run-all]

npm install npm-run-all --save-dev

A CLI tool to run multiple npm-scripts in parallel or sequential.









