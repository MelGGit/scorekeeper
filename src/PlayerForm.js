import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <PlayerLabel>
        Add Player:
        <PlayerInput
          className="PlayerForm__input"
          type="text"
          name="name"
          placeholder="Player name"
        />
      </PlayerLabel>
    </form>
  )

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(e.target.elements.name.value)
    e.target.reset()
  }
}

const PlayerLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const PlayerInput = styled.input`
  padding: 2px;
`
