import  styles  from './styled.module.scss'

import ResetButton from '../resetButton/index.jsx'

function ModalWindow({resetGameAndCloseHandler, winner}) {

  const resultText = {
    'x': 'The crosses won',
    '0': 'The zeroes won',
    '-': 'Game over - draw'
  }

  return (
    <div className={styles.modalWrapper} >
      <div className={styles.modalContent}>
        <span onClick={resetGameAndCloseHandler} className={styles.close}>&times;</span>
        <h2>{resultText[winner]}</h2>
        <ResetButton onClick={resetGameAndCloseHandler}>Reset game</ResetButton>
      </div>
    </div>
  )
}

export default ModalWindow