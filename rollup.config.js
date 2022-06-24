import path from 'path'
import { getBabelInputPlugin } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const getConfig = (output, tsconfig) => {
  return {
    input: './src/index.ts',
    output,
    plugins: [
      resolve(),
      json(),
      commonjs({
        transformMixedEsModules: true
      }),
      typescript({
        tsconfig
      }),
      getBabelInputPlugin({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        configFile: path.resolve(__dirname, 'babel.config.json')
      })
    ],
    external: []
  }
}
export default [
  getConfig(
    [
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    './tsconfig.json'
  ),
  getConfig(
    [
      {
        dir: 'esm',
        format: 'esm',
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    './tsconfig.esm.json'
  )
]
