dev environments
================



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




----------------------------------



### postcss with chokidar (tiny app) & nodemon

// scripts

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev:server": "nodemon --watch api --watch db --watch server.js server.js 3000",
  "dev:watchCss": "chokidar 'styles/**/*.css' -c 'npm run css:buildDev && npm run heart'",
  "dev:bs": "./node_modules/.bin/browser-sync start -c ./bs-config.js",
  "css:buildDev": "postcss styles/styles.css -o public/styles/styles.css -c ./postcss.config.js",
  "dev": "run-p dev:*",
  "heart": "echo '<3\n'"
}
```


// dependancies

```javascript
"devDependencies": {
  "browser-sync": "^2.18.13",
  "chokidar": "^1.7.0",
  "nodemon": "^1.12.1",
  "npm-run-all": "^4.1.2",
  "postcss": "^6.0.14",
  "postcss-cli": "^4.1.1",
  "postcss-cssnext": "^3.0.2",
  "postcss-hexrgba": "^1.0.0",
  "postcss-import": "^11.0.0",
  "postcss-load-config": "^1.2.0",
  "postcss-mixins": "^6.2.0",
  "postcss-nested": "^2.1.2",
  "postcss-simple-vars": "^4.1.0"
}
```



----------------------------------




### npm postcss compiler

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



























