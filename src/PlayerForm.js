import './PlayerForm.css'
import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label className="PlayerForm__label">
        Add Player:
        <input type="text" name="name" placeholder="Player name" />
      </label>
    </form>
  )

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(e.target.elements.name.value)
    e.target.reset()
  }
}
