import styled, { css } from 'vue-styled-components'
const buttonProps = { color: String, br: String, pad: String, bgc: String }

const bgcolor = ({ theme }) => css`
  background-color: ${(props) =>
    props.bgc ? props.bgc : theme.colors.Interaction};
`

export const StyledButton = styled('button', buttonProps)`
  color: ${(props) => props.color};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.pad};
  ${bgcolor}
  letter-spacing: 1px;
  cursor: pointer;
`
export default {}
