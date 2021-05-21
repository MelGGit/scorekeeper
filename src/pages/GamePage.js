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
        <Button onClick={onEndGame}>End game</Button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-rows: min-content min-content auto;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  flex-direction: column;
`
const PlayerContainer = styled.div`
  display: grid;
  gap: 10px;
`
