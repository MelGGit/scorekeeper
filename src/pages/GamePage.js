import PropTypes from 'prop-types'
import Header from '../Header'
import Player from '../Player'
import Button from '../Button'
import styled from 'styled-components'

GamePage.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScore: PropTypes.func,
  onEndGame: PropTypes.func,
  onScoreUpdate: PropTypes.func,
}

export default function GamePage({
  nameOfGame,
  players,
  onResetScore,
  onEndGame,
  onScoreUpdate,
}) {
  return (
    <Container>
      <Header>{nameOfGame}</Header>
      <PlayerContainer>
        {players.map(({ name, score }, index) => (
          <Player
            key={name}
            name={name}
            score={score}
            onMinus={() => onScoreUpdate(index, -1)}
            onPlus={() => onScoreUpdate(index, 1)}
          />
        ))}
      </PlayerContainer>
      <ButtonContainer>
        <Button onClick={onResetScore}>Reset score</Button>
        <Button onClick={handleEndGame}>End game</Button>
      </ButtonContainer>
    </Container>
  )

  function handleEndGame() {
    onEndGame()
  }
}

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 50px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const PlayerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
