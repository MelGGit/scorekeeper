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
      <section className="App__players">
        {players.map((player, index) => (
          <ScoreboardRow
            key={player.name}
            name={player.name}
            score={player.score}
            onMinus={() => handleScore(index)}
            onPlus={() => handleScore(index, true)}
          />
        ))}
      </section>
      <section className="App__buttonContainer">
        <Button onClick={handleResetScore}>Reset score</Button>
        <Button onClick={handleResetAll}>Reset all</Button>
      </section>
      <section className="App__playerFormContainer">
        <PlayerForm onSubmit={createPlayer} />
      </section>
    </div>
  )

  function handleScore(index, plus) {
    setPlayers([
      ...players.slice(0, index),
      {
        ...players[index],
        score: plus ? players[index].score + 1 : players[index].score - 1,
      },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }

  // function handleMinus(index) {
  //   setPlayers([
  //     ...players.slice(0, index),
  //     { ...players[index], score: players[index].score - 1 },
  //     ...players.slice(index + 1),
  //   ])
  // }

  // function handlePlus(index) {
  //   setPlayers([
  //     ...players.slice(0, index),
  //     { ...players[index], score: players[index].score + 1 },
  //     ...players.slice(index + 1),
  //   ])
  // }

  function handleResetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handleResetAll() {
    setPlayers([])
  }
}

export default App
