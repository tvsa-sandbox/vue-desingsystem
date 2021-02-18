<template>
  <div id="theme-provider">
    <styled-wrapper />
  </div>
</template>

<script>
import { StyledWrapper } from './wrapperStyles'

export default {
  name: 'Wrapper',
  components: {
    'styled-wrapper': StyledWrapper,
  },
}
</script>
