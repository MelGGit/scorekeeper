import PlayerForm from './PlayerForm'
import Player from './Player'
import Button from './Button'
import { useState } from 'react'
import styled from 'styled-components/macro'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <AppWrapper>
      <PlayerForm onSubmit={createPlayer} />

      <PlayerList>
        {players.map((player, index) => (
          <li key={player.name}>
            <Player
              name={player.name}
              score={player.score}
              onMinus={() => handleScore(index, -1)}
              onPlus={() => handleScore(index, 1)}
            />
          </li>
        ))}
      </PlayerList>
      <ButtonWrapper>
        <Button onClick={handleResetScore}>Reset score</Button>
        <Button onClick={handleResetAll}>Reset all</Button>
      </ButtonWrapper>
    </AppWrapper>
  )

  function handleScore(index, value) {
    setPlayers([
      ...players.slice(0, index),
      {
        ...players[index],
        score: players[index].score + value,
      },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }

  function handleResetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handleResetAll() {
    setPlayers([])
  }
}

const AppWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: min-content auto min-content;
  height: 100vh;
  gap: 20px;
`
const PlayerList = styled.ul`
  list-style: none;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
