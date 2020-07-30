//引入path模块
const path = require('path');

module.exports = {
  //需要绝对路径
  entry:'./src/js/main.js',
  output : {
    path: path.resolve(__dirname, './dist'),
    filename : 'bundle.js',
    publicPath : 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name : 'img/[name].[hash:8].[ext]'
            }
          }
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ],
  },
  resolve : {
    alias: {
      'vue$' : 'vue/dist/vue.esm.js' 
    }
  }
}

