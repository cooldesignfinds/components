import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const formats = ['esm', 'umd'] // 'cjs' ?

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers'
      ],
      presets: [
        ['env', {modules: false}],
        'stage-0',
        'react'
      ]
    }),
    commonjs({
      namedExports: {
        'src/theme.js': ['breakpoints', 'colors']
      }
    })
  ],
  output: formats.map(format => ({
    file: `dist/index.${format}.js`,
    format,
    name: 'PrimerReact'
  }))
}
