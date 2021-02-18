const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {
    // extend config here

    return config
  },
  stories: [
    // Add your stories here
  ],
  addons: [
    // {
    //   name: '@storybook/addon-essentials',
    //   options: {
    //     backgrounds: false,
    //     configureJSX: true,
    //     babelOptions: {},
    //     sourceLoaderOptions: null,
    //   },
    // },
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
  ],
})
