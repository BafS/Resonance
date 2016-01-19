var path = require('path')
// var webpack = require("webpack");

module.exports = {
  entry: ['./app/main.js'],
  // output: {
  //   path: './dist',
  //   publicPath: 'dist/',
  //   // publicPath: path.join(__dirname, 'dist'),
  //   // publicPath: '/',
  //   // publicPath: 'http://localhost:3000/dist/',
  //   filename: 'build.js'
  // },
  output: {
    path: './dist',
    filename: 'build.js',
    // publicPath: 'dist/'
    // libraryTarget: 'umd',
    libraryTarget: 'commonjs2',
    publicPath: 'http://localhost:3000/dist/'
  },
  // target: 'atom',
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // loader: 'babel!eslint',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // vue-loader config:
  // lint all JavaScript inside *.vue files with ESLint
  // make sure to adjust your .eslintrc
  vue: {
    loaders: {
      js: 'babel'
      // js: 'babel!eslint'
    }
  },
  // configure babel-loader (for both .js and .vue files).
  // see https://babeljs.io/docs/usage/options/
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  externals: [
    'sequelize', 'sqlite3'
  ],

  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      bower_components: path.join(__dirname, 'bower_components')
      // plyr: 'bower_components/plyr/dist/plyr.js'
    }
  }
}
