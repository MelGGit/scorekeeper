import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid black;
  background: white;
  cursor: pointer;
  border-radius: 10px;
  color: ${props => (props.isActive ? 'white' : 'black')};
  transition: all 1s ease;
  transition-property: color, background;

  &:hover {
    background: black;
    color: white;
  }
`

export default Button
