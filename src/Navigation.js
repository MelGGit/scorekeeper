import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

Navigation.propTypes = {
  onNavigate: PropTypes.func,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPageId: PropTypes.string,
}

export default function Navigation({ onNavigate, pages, currentPageId }) {
  return (
    <Navbar>
      {pages.map(({ title, id }) => (
        <NavbarButton
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
        >
          {title}
        </NavbarButton>
      ))}
    </Navbar>
  )
}

const Navbar = styled.nav`
  display: flex;
`

const NavbarButton = styled(Button)`
  width: 100%;
  border-radius: 0;
`
