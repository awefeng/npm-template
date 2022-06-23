import path from 'path'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: path.resolve(__dirname, '.', 'dist'),
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        preserveModules: true
      },
      {
        dir: path.resolve(__dirname, '.', 'dist'),
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        preserveModules: true
      }
    ],
    plugins: [
      resolve(),
      json(),
      commonjs({
        transformMixedEsModules: true
      }),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      getBabelOutputPlugin({
        configFile: path.resolve(__dirname, 'babel.config.js')
      })
    ],
    external: []
  }
]
