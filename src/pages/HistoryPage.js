import PropTypes from 'prop-types'
import styled from 'styled-components'
import HistoryEntry from '../HistoryEntry'

HistoryPage.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      nameOfGame: PropTypes.string,
      players: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
      ),
    })
  ),
}
export default function HistoryPage({ games }) {
  return (
    <Container>
      {games.map(({ nameOfGame, players }, index) => (
        <HistoryEntry key={index} nameOfGame={nameOfGame} players={players} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 30px;
  width: 60%;
`
