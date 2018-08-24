package scripts
===============



### npm scripts sass compiler

(repo)[https://github.com/hellobrian/sass-recipes/tree/master/node-sass]

npm i node-sass-chokidar
npm i autoprefixer chokidar-cli npm-run-all postcss-cli -S

// scripts
```javascript
"scripts": {
  "build-task:scss-compile": "node-sass-chokidar --source-map true src/scss/ -o dist/css",
  "build-task:autoprefixer": "postcss dist/css/*.css --use autoprefixer -d dist/css",
  "sass:build": "npm-run-all -p build-task:*",
  "sass:watch": "chokidar 'src/scss/**/*.scss' -c 'npm run sass:build'",
  "dev": "npm-run-all -p sass:*"
}
```


### autoprefixer

PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from (Can I Use)[http://caniuse.com/]

### node-sass-chokidar

A thin wrapper around node-sass executable to use chokidar instead of Gaze when watching files.

### npm-run-all

A CLI tool to run multiple npm-scripts in parallel or sequential.

### postcss-cli

(docs)[https://www.npmjs.com/package/postcss-cli]





--------------------------------------


### npm sass nodemom (schoodle project)


```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node server.js",
  "local": "./node_modules/.bin/nodemon --ignore public/",
  "knex": "./node_modules/.bin/knex",
  "develop": "npm-run-all -p local sass:*",
  "sass:watch": "chokidar 'styles/**/*.scss' -c 'npm run sass:build'",
  "sass:build": "npm-run-all -p build:*",
  "build:autoprefixer": "postcss public/styles/*.css --use autoprefixer -d public/styles",
  "build:compile": "node-sass-chokidar --source-map true styles -o public/styles"
}
```



----------------------------------




### npm postcss compiler

(docs)[https://medium.com/pixel-for-creative-people/how-to-use-npm-scripts-and-postcss-3efdb1eae011]

npm install clean-css concat-cli critical csscomb postcss-cli postcss-cssnext rework-npm-cli uncss --save-dev

```javascript
"scripts": {
"–––––––CSS SCRIPTS": "–––––––––––––",
"postcss": "postcss --config postcss.json",
"css:concat": "cat assets/css/*.css > assets/css/bundle.css",
"cssnext": "postcss -u postcss-cssnext assets/css/bundle.css >  assets/css/bundle.next.css",
"css:comb": "csscomb assets/css/bundle.next.css",
"css:uncss": "cat dist/public/*.html | uncss -s assets/css/bundle.next.css > assets/css/bundle.clean.css",
"css:minify": "cleancss assets/css/bundle.clean.css -o dist/public/css/bundle.min.css  && rm assets/css/bundle.*",
"build:css": "echo '=> build:css' && npm run css:concat && npm run cssnext && npm run css:comb  && npm run css:uncss && npm run css:minify"
}
```



























