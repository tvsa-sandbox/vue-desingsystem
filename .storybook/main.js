const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path')

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.node = {
    //   // fs: 'empty',
    //   // global: true,
    // }
    config.module.rules.push({
      test: /\.(woff|woff2|)$/,
      loaders: ['file-loader'],
      include: path.resolve(__dirname, '../assets/'),
    })

    // Return the altered config
    // console.log("conf", config.node);

    return config
  },
  stories: [
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
    './stories/**/*.stories.mdx',
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
