import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default function Player({ name, score, onMinus, onPlus, disabled }) {
  return (
    <PlayerWrapper>
      {name}
      <PlayerScoreWrapper>
        <PlayerButton onClick={onMinus} disabled={disabled ? true : false}>
          -
        </PlayerButton>
        <PlayerOutput>{score}</PlayerOutput>
        <PlayerButton onClick={onPlus} disabled={disabled ? true : false}>
          +
        </PlayerButton>
      </PlayerScoreWrapper>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PlayerScoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
`
const PlayerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  background: white;
  transition: all 0.5s ease;
  transition-property: color, background;
  display: ${props => (props.disabled ? 'none' : '')};

  &:hover {
    background: black;
    color: white;
  }
`

const PlayerOutput = styled.output`
  width: 3.2ch;
  text-align: right;
`
