import styled from 'styled-components'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderHeading>{children}</HeaderHeading>
}

const HeaderHeading = styled.h2`
  text-align: center;
`
