/* eslint-disable */
process.env.BABEL_ENV = 'main';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import { Configuration } from 'webpack';
import { resolve } from 'path';
const { dependencies } = require('../../package.json');

type MODE_TYPE = 'development' | 'production' | 'none';

const mainConfig: Configuration = {
  mode: process.env.NODE_ENV as MODE_TYPE,
  target: 'electron-main',
  devtool: 'source-map',
  entry: {
    main: resolve(__dirname, '../../src/main/main.ts')
  },
  output: {
    filename: '[name].js',// 生成的filename需要与package.json中的main一致
    path: resolve(__dirname, '../../dist/main'),
    libraryTarget: 'commonjs',
  },
  externals: [ ...dependencies ],
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: resolve(__dirname, '../../src/tsconfig.main.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [ ],
  resolve: {
    extensions: ['.ts', '.json', '.js']
  },
};

if (process.env.NODE_ENV !== 'production') { }
if (process.env.NODE_ENV === 'production') { }

export default mainConfig;
