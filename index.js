const { resolve } = require('path')

const defaultOptions = {
  'bulma': {
    active: true
  },
  'mdi': {
    active: true
  },
  'animate.css': {
    active: true
  },
  'vue-in-viewport-directive': {
    active: true
  },
  'vue-scrollactive': {
    active: true
  },
  'vue-headroom': {
    active: true
  },
}

module.exports = function xui (moduleOptions) {
  const options = Object.assign(defaultOptions, moduleOptions)

  options['bulma'].active && this.options.css.push('bulma/css/bulma.css')
  options['mdi'].active && this.options.css.push('mdi/css/materialdesignicons.min.css')
  options['animate.css'].active && this.options.css.push('animate.css')

  options['vue-in-viewport-directive'].active && this.addPlugin({
    src: resolve(__dirname, './plugins/vue-in-viewport-directive.js'),
    options: options['vue-in-viewport-directive'].options
  })

  options['vue-scrollactive'].active && this.addPlugin({
    src: resolve(__dirname, './plugins/vue-scrollactive.js'),
    options: options['vue-scrollactive'].options
  })

  options['vue-headroom'].active && this.addPlugin({
    src: resolve(__dirname, './plugins/vue-headroom.js'),
    options: options['vue-headroom'].options,
    ssr: false
  })
}

module.exports.meta = require('./package.json')
