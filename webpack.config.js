const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.fbs' ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
       {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/',
          },
        },
      ],
    },
    {
      test: /\.fbx$/,
      use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'models/'
              }
          }
      ]
  }
    ],
  },
};
