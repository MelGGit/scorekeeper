import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid black;
  width: 60%;
  background: ${props => (props.isActive ? 'black' : 'white')};
  cursor: pointer;
  border-radius: 10px;
  color: ${props => (props.isActive ? 'white' : 'black')};
  transition: all 0.5s ease;
  transition-property: color, background;

  &:hover {
    background: grey;
  }
`

export default Button
