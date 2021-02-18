import styled, { css } from 'vue-styled-components'
import { GlobalStyles } from './GlobalStyles'
const wrapperProps = { color: String, bgc: String }

const bgcolor = ({ theme }) => css`
  color: ${(props) => theme.colors.Dark};
  background-color: ${(props) => theme.colors.back};
`

export const StyledWrapper = styled('body', wrapperProps)`
  ${GlobalStyles}
  ${bgcolor}
`
