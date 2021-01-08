const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  mode: "development",
  module: {
 rules: [
    {
     test: /\.css$/i,
     use: ['style-loader', 'css-loader'],
     },

     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       use: [
         'file-loader',
       ],
     },
     {
			    test: /\.(ogg|mp3|wav|mpe?g)$/i,
			    use: 'file-loader'
			},
     {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
           ],
         }
};
