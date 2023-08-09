import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './dist-ts/index.js',
  plugins: [
    commonjs(),
    resolve({}),
  ],
  output: [
    { format: 'esm', file: './dist/index-esm.mjs' },
    { format: 'cjs', file: './dist/index.js' },
  ],
  external: [
    'react'
  ],
}
