const { resolve } = require('./config');

// webpack 配置文档
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.esm', '.css', '.less'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|esm)$/,
        include: [resolve('../src')],
        use: ['babel-loader'],
        exclude: [resolve('../umd'), resolve('../node_modules')]
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        include: [resolve('../src'), resolve('../node_modules')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        // 图片加载处理
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        include: [resolve('../src')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new CaseSensitivePathsPlugin()]
};
