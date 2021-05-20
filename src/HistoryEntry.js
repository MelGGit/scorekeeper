import Header from './Header'
import ScoreboardRow from './ScoreboardRow'
import PropTypes from 'prop-types'

HistoryEntry.propTypes = {
  nameOfGame: PropTypes.string,
  player: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section>
      <Header>{nameOfGame}</Header>
      <ul>
        {players.map(player => (
          <ScoreboardRow name={player.name} score={player.score} disabled />
        ))}
      </ul>
    </section>
  )
}
