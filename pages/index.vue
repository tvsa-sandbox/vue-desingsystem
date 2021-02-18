<template>
  <theme-provider :theme="theme">
    <wrapper />
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">vue-desingsystem</h1>
        <div class="links">
          <base-link />
        </div>
      </div>
    </div>
  </theme-provider>
</template>
<script>
import merge from 'lodash.merge'
import get from 'lodash.get'
import { ThemeProvider } from 'vue-styled-components'
import * as whiteLabel from '../lib/themes/whiteLabel'
import Wrapper from '../components/wrapper'
import BaseLink from '~/components/BaseLink.vue'

const wl = whiteLabel

const modes = ['light', 'dark']

const getThemeMode = (mode, btheme) =>
  merge({}, btheme, {
    colors: get(btheme.colors.modes, mode, btheme.colors),
  })
const theme = getThemeMode(modes[1], wl)
export default {
  components: {
    'base-link': BaseLink,
    'theme-provider': ThemeProvider,
    wrapper: Wrapper,
  },
  data: () => ({ theme }),
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
