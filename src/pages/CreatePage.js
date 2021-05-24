import styled from 'styled-components'
import Button from '../Button'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'

CreatePage.propTypes = {
  onSubmit: PropTypes.func,
}

export default function CreatePage({ onSubmit }) {
  const history = useHistory()
  return (
    <Form aria-label="create-page-form" onSubmit={handleSubmit}>
      <Label>
        Name of game:
        <input type="text" name="name" placeholder="e.g. Carcassonne" />
      </Label>
      <Label>
        Player names:
        <input type="text" name="players" placeholder="e.g. John, Jane" />
      </Label>
      <Button>Create game</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const game = {
      nameOfGame,
      players,
    }
    onSubmit(game)
    history.push('/game')
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  align-items: center;
`

const Label = styled.label`
  display: grid;
  gap: 5px;
  width: 100%;
`
