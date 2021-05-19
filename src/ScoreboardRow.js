import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ScoreboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function ScoreboardRow({ name, score, onMinus, onPlus }) {
  return (
    <Wrapper>
      {name}
      <div className="ScoreboardRow__container">
        <button onClick={onMinus}>-</button>
        <output>{score}</output>
        <button onClick={onPlus}>+</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    background: white;
    transition: all 0.75s ease;
    transition-property: color, background;
  }

  button:hover {
    background: black;
    color: white;
  }

  output {
    width: 3.2ch;
    text-align: right;
  }
`
