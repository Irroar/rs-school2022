import { resolve as _resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const __dirname = dirname(fileURLToPath(import.meta.url));

const baseConfig = {
  entry: _resolve(__dirname, './src/index.ts'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: 'index.js',
      path: _resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: _resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

export default ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? import('./webpack.prod.config.js') : import('./webpack.dev.config.js');
  return merge(baseConfig, envConfig);
};