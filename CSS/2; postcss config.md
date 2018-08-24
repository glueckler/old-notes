postcss config
--------------

npm i -D postcss-load-config

(docs)[https://github.com/michael-ciniawsky/postcss-load-config]

```
App
  |– client
  |– public
  |
  |- (postcss.config.js|.postcssrc.js)
  |- package.json
```



postcss.config.js
-----------------

```javascript
module.exports = {
  parser: 'sugarss',
  map: false,
  from: '/path/to/src.sss',
  to: '/path/to/dest.css',
  plugins: {
    'postcss-plugin': {}
  }
}
```

---


Options
-------

```
syntax: an object providing a syntax parser and a stringifier.

parser: a special syntax parser (for example, SCSS).

stringifier: a special syntax output generator (for example, Midas).

map: source map options.

from: the input file name (most runners set it automatically).

to: the output file name (most runners set it automatically).
```

parser:

'parser': 'sugarss'

syntax:

'syntax': 'postcss-scss'

stringifier:

'stringifier': 'midas'

map:

'map': 'inline'

from:

from: 'path/to/src.css'

to:

to: 'path/to/dest.css'


---------------------


### syntaxes


// PostCSS can transform styles in any syntax, not just CSS.

// If there is not yet support for your favorite syntax, you can write a parser and/or stringifier to extend PostCSS.

sugarss is a indent-based syntax like Sass or Stylus.

postcss-html allows you to write styles in HTML / Markdown / Vue component

postcss-scss allows you to work with SCSS (but does not compile SCSS to CSS).

postcss-sass allows you to work with Sass (but does not compile Sass to CSS).

postcss-less allows you to work with Less (but does not compile LESS to CSS).

postcss-less-engine allows you to work with Less (and DOES compile LESS to CSS using true Less.js evaluation).

postcss-js allows you to write styles in JS or transform React Inline Styles, Radium or JSS.

postcss-safe-parser finds and fixes CSS syntax errors.

midas converts a CSS string to highlighted HTML.


----


### plugins

```
{} || null: Plugin loads with defaults.

'postcss-plugin': {} || null

[Object]: Plugin loads with given options.

'postcss-plugin': { option: '', option: '' }

false: Plugin will not be loaded.

'postcss-plugin': false
```

// ORDER

```javascript
{
  plugins: {
    'postcss-plugin': {}, // plugins[0]
    'postcss-plugin': {}, // plugins[1]
    'postcss-plugin': {}  // plugins[2]
  }
}
```


---

### source maps (map)

(docs)[https://github.com/postcss/postcss/blob/master/docs/source-maps.md]




