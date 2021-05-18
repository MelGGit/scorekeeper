import './Button.css'
import PropTypes from 'prop-types'

Button.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

export default function Button({ children, isActive, onClick }) {
  return (
    <button
      className={`Button ${isActive ? 'Button--active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
