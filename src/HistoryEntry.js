import Header from './Header'
import ScoreboardRow from './ScoreboardRow'

export default function HistoryEntry({ text, playerOne, playerTwo }) {
  return (
    <section>
      <Header>{text}</Header>
      <ScoreboardRow name={playerOne.name} score={playerOne.score} disabled />
      <ScoreboardRow name={playerTwo.name} score={playerTwo.score} disabled />
    </section>
  )
}
