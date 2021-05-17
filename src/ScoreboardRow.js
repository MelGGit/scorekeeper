import './ScoreboardRow.css'

import PropTypes from 'prop-types'

ScoreboardRow.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func,
  onPlus: PropTypes.func,
}

export default function ScoreboardRow({ name, score, onMinus, onPlus }) {
  return (
    <section className="ScoreboardRow">
      {name}
      <div className="ScoreboardRow__container">
        <button className="ScoreboardRow__button" onClick={onMinus}>
          -
        </button>
        {score}
        <button className="ScoreboardRow__button" onClick={onPlus}>
          +
        </button>
      </div>
    </section>
  )
}
