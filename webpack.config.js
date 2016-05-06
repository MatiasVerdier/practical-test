const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=85000' },
      { test: /\.jpg$/, loader: 'file-loader' }
    ]
  }
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server'
    ],
    module: {
      loaders: [
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel-loader']
        }
      ]
    },
    postcss: function () {
      return [autoprefixer]
    },
    devServer: {
      contentBase: PATHS.build,
      devTool: 'eval-source-map',
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: process.env.HOST,
      port: process.env.PORT
    }
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  })
}
