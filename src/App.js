import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [nameOfGame, setNameOfGame] = useState('')
  const [players, setPlayers] = useState([])
  const [history, setHistory] = useState([])

  const pages = [
    { title: 'Create', id: 'create' },
    { title: 'History', id: 'history' },
  ]

  return (
    <Router>
      <AppContainer>
        <PageContainer>
          <Switch>
            <Route exact path="/">
              <CreatePage onSubmit={handleSubmit} />
            </Route>
            <Route path="/game">
              <GamePage
                nameOfGame={nameOfGame}
                players={players}
                onResetScore={handleResetScore}
                onScoreUpdate={handleScoreUpdate}
                onEndGame={handleEndGame}
              />
            </Route>
            <Route path="/history">
              <HistoryPage games={history} />
            </Route>
          </Switch>
        </PageContainer>
        {currentPageId !== 'game' && (
          <Navigation
            pages={pages}
            currentPageId={currentPageId}
            onNavigate={setCurrentPageId}
          />
        )}
      </AppContainer>
    </Router>
  )

  function handleSubmit({ nameOfGame, players }) {
    setNameOfGame(nameOfGame)
    setPlayers(players)
    setCurrentPageId('game')
  }

  function handleScoreUpdate(index, value) {
    setPlayers([
      ...players.slice(0, index),
      {
        ...players[index],
        score: players[index].score + value,
      },
      ...players.slice(index + 1),
    ])
  }

  function handleResetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([{ nameOfGame, players }, ...history])
  }
}

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const PageContainer = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
