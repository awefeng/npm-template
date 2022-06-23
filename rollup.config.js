import path from 'path'
import { getBabelInputPlugin } from '@rollup/plugin-babel'
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
        file: pkg.main,
        format: 'cjs',
        exports: 'named'
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named'
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
      getBabelInputPlugin({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        configFile: path.resolve(__dirname, 'babel.config.json')
      })
    ],
    external: []
  }
]
