const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: './dist',
    hot: false, // Disable hot reloading
    liveReload: false, // Disable live reload
    compress: true,
    port: 3000,
  },
  optimization: {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    splitChunks: false, // Disable code splitting for simpler build
  },
}; 