import PlayerForm from './PlayerForm'
import ScoreboardRow from './ScoreboardRow'
import Button from './Button'
import { useState } from 'react'
import './App.css'

function App() {
  const [players, setPlayers] = useState([
    { name: 'Mel', score: 100 },
    { name: 'Marlin', score: 200 },
  ])

  return (
    <div className="App">
      <PlayerForm onSubmit={createPlayer} />

      <ul className="App__playerList">
        {players.map((player, index) => (
          <li>
            <ScoreboardRow
              key={player.name}
              name={player.name}
              score={player.score}
              onMinus={() => handleScore(index, -1)}
              onPlus={() => handleScore(index, 1)}
            />
          </li>
        ))}
      </ul>
      <div className="App__buttons">
        <Button onClick={handleResetScore}>Reset score</Button>
        <Button onClick={handleResetAll}>Reset all</Button>
      </div>
    </div>
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

export default App
