<template>
  <div id="theme-provider">
    <ThemeProvider :theme="theme">
      <slot></slot>
    </ThemeProvider>
  </div>
</template>

<script>
import { ThemeProvider } from 'vue-styled-components'

export default {
  name: 'CustomThemeProvider',
  components: {
    ThemeProvider,
  },
  props: {
    theme: {
      type: Object,
      default: null,
    },
  },
  // data() {
  //   return { theme }
  // },
}
</script>
