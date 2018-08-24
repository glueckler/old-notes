webpack
-------

npm install webpack -g

### CLI

// when you run webpack from the command line, it reads the webpack.config.js file to figure out what the main input file and output file should be


### webpack.config.js

// use a config file within the root of the project

// webpack.config.js


```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```


---

// hint, the dependancy for a loader is that there exist a require or reference that point to that file

ex, WARNING typed out by hand
```javascript
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopeWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerWebpackPlugin = require('webpack-bundle-analyzer')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: env === 'production' ? 'cheap-source-map' : 'source-map',
  entry: {
    app: path.resolve(__dirname, 'client/js/index.js')
  },
  output: {
    filename: 'js/[name]-generated.js',
    path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'es2015'
            ]
          }
        }
      },
      {
// replace this method with ExtractTextWebpackPlugin
// because in this case we'd like to created a seperate css file
// instead of having css compiled to the main javscript file
//        test: /\.scss/,
//        use: [
//          'style-loader',
//          'css-loader',
//          'sass-loader'
//       ]
        test: /\.scss/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style loader',
          use: 'css-loader?!sass-loader'
        }),
      {
        test: /\.ttf/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'client/html'),
      inject: true
    }),
    new CopyWebpackPlugin([
      { from: 'client/images', to: path.resolve(__diname, 'build/images') }
    ]),
    new ExtractTextWebpackPlugin('css/app-generated.css')
 //   new BundleAnalyzerWebpackPlugin
 // we will implement this just below given an appropriate NODE_ENV plugin
  ],

// some of this (polling mostly) is applicable for use on a virtual machine

  devServer: {
    contentBase: path.resolve(__dirname, 'build/'),
    watchOptions: {
      aggragateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  }
}

config.plugins.push(new Bundle)

if (process.env.ANALYZE_BUNDLE) {
  config.plugins.push(new BundleAnalyzerWebpackPlugin)
}
```


---------------------



path
----

// construct paths based on directory this file was loaded from

// to avoid issues with building paths across different machines

// because running ./ is a relative path, but relative to what?  It depends on the machine

```javascript
const path = require('path')

path.resolve(__dirname, 'client/js/index.js')
```




---------------------



watch
-----

(watch docs)[https://webpack.js.org/configuration/watch/]

### CLI

webpack --watch


### config file

```javascript
module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  watch: true
}
```



---------------------



webpack-dev-server
------------------

npm install webpack-dev-server -g

(config)[https://webpack.js.org/configuration/dev-server/]

// to host site locally

```javascript
webpack-dev-server
```

### options

// This tells webpack-dev-server to serve the files from the dist directory on localhost:8080

```javascript
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}
```


---------------------



logger
------

// can create a logger file

// or logger.es6 maybe for es6 shiiiiiittt

```javascript
let checkName= (firstName, lastName) => {
 if(firstName !== 'nader' || lastName !== 'dabit') {
   console.log('You are not Nader Dabit');
 } else {
    console.log('You are Nader Dabit');
  }
}
checkName('nader', 'jackson');
```



---------------------



babel (and jshint)
------------------

npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev

babel-core is the babel npm package

babel-loader is the babel module loader for Webpack

jshint is a tool that helps to detect errors and potential problems in your JavaScript code

jshint-loader is the jshint loader module for Webpack

node-libs-browser is a peer dependency of Webpack. It provides certain Node libraries for browser usage.

babel-preset-es2015 is a babel preset for all es2015 plugins.

babel-preset-react is a babel preset for all React plugins.




---------------------



entry
-----

(docs)[https://webpack.js.org/configuration/]

// In webpack we define entry points using the entry

### shorthand

```javascript
entry: './path/to/my/entry/file.js'
```

// which is short for..

```javascript
entry: {
  main: './path/to/my/entry/file.js'
}
```

### object syntax

// this tells webpack to create dependency graphs starting at both app.js and vendors.js

```javascript
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

### multi page apps

// As a rule of thumb: for each HTML document use exactly one entry point.

```javascript
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```


---------------------


output
------

(output docs)[https://webpack.js.org/configuration/output/]

// The webpack output property tells webpack how to treat bundled code

```javascript
const path = require('path');

module.exports = {

  . . .,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```


### Mulitples entries

// If your configuration creates more than a single "chunk"

// you should use substitutions to ensure that each file has a unique name

// (more on output filename)[https://webpack.js.org/configuration/output/#output-filename]

```javascript
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
```



---------------------



loaders
-------

(loaders docs)[https://webpack.js.org/concepts/loaders/]

```javascript
const config = {

  . . .,

  module: {
    rules: [
      { test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
};
```


// It is important to remember that when defining rules in your webpack config, you are defining them under module.rules and not rules



---------------------



plugins
-------

(plugins docs)[https://webpack.js.org/concepts/plugins/]

```javascript
//installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
//to access built-in plugins
const webpack = require('webpack');

const config = {

  ...,

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

```







---------------------------------------------------



Examples
--------

//ex with babel

```javascript
const path = require('path');
module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }

}
```






