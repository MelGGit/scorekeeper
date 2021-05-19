import styled, { css } from 'styled-components/macro'
import PropTypes from 'prop-types'

Navigation.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default function Navigation({ isActive, handleClick }) {
  return (
    <Navbar>
      <NavbarButton isActive={isActive ? true : false} onClick={handleClick}>
        Play
      </NavbarButton>
      <NavbarButton isActive={!isActive ? true : false} onClick={handleClick}>
        History
      </NavbarButton>
    </Navbar>
  )
}

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const NavbarButton = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding: 5px 20px;
  font-size: inherit;
  cursor: pointer;
  background: white;
  transition: all 0.75s ease;
  transition-property: color, background;

  ${props =>
    props.isActive &&
    css`
      border-left: 1px solid #999999;
      border-top: 1px solid #999999;
      border-bottom: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
      pointer-events: none;
      opacity: 0.5;
    `}

  &:last-child {
    border-left: none;
  }

  &:hover {
    background: black;
    color: white;
  }
`
