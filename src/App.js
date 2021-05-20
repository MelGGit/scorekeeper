import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('create')

  const pages = [
    { title: 'Create', id: 'create' },
    { title: 'History', id: 'history' },
  ]

  return (
    <AppContainer>
      <PageContainer>
        {currentPageId === 'create' && <CreatePage />}
        {currentPageId === 'game' && <GamePage />}
        {currentPageId === 'history' && <HistoryPage />}
      </PageContainer>
      <Navigation
        pages={pages}
        currentPageId={currentPageId}
        onNavigate={setCurrentPageId}
      />
    </AppContainer>
  )

  // function handleScore(index, value) {
  //   setPlayers([
  //     ...players.slice(0, index),
  //     {
  //       ...players[index],
  //       score: players[index].score + value,
  //     },
  //     ...players.slice(index + 1),
  //   ])
  // }

  // function createPlayer(name) {
  //   setPlayers([...players, { name, score: 0 }])
  // }

  // function handleResetScore() {
  //   setPlayers(players.map(player => ({ ...player, score: 0 })))
  // }

  // function handleResetAll() {
  //   setPlayers([])
  // }
}

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const PageContainer = styled.div`
  padding: 20px;
`
