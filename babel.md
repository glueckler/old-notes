babel
-----

### .babelrc

// via package.json

// specify your .babelrc config from within package.json like so:
```javascript
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    // my babel config here
  }
}
```


---------------


### env (modern javascript)

(docs)[https://babeljs.io/docs/plugins/preset-env]

npm install --save-dev babel-cli babel-preset-env

// package.json

(env )

```javascript
{
  "presets": ["env"]
}
```



---------------


### React jsx

npm install --save-dev babel-plugin-transform-react-jsx

```javascript
{
  "plugins": ["transform-react-jsx"]
}
```

