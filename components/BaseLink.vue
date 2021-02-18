<template>
  <styled-button
    :color="color"
    :br="br + 'px'"
    :pad="pad + 'px'"
    :bgc="bgc"
    @click="alertButton"
  >
    <slot>{{ text }}</slot>
  </styled-button>
</template>

<script>
import { StyledButton } from './buttonstyles'
export default {
  name: 'BaseLink',
  components: {
    'styled-button': StyledButton,
  },
  props: {
    text: {
      type: String,
      default: 'Click me!',
    },
    color: {
      type: String,
      default: 'white',
    },
    br: {
      type: Number,
      default: 5,
    },
    pad: {
      type: Number,
      default: 10,
    },
    bgc: {
      type: String,
      default: '',
    },
    alertButton: {
      type: Function,
      default: () => alert('defecto'),
    },
  },
}
</script>
