// postcss.config.js

const cssnano = require('cssnano')({ preset: 'default' })

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
  ]
}
