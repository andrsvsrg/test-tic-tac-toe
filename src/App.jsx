import styles from './app.module.scss'

import  { useState } from 'react'

import ModalWindow from './components/modalWindow/index.jsx'
import PlayArea from './components/playArea/index.jsx'
import SettingsHeader from './components/settingsHeader/index.jsx'
import { generateArea } from './helpers/helpers.js'


function App() {
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false)
  const [nextPlayerStep, setNextPlayerStep] = useState(true)   // true = x || false = 0
  const [winner, setWinner] = useState(null)
  const [areaSize, setAreaSize] = useState(3)
  const [areaArray, setAreaArray] =useState(generateArea(areaSize))

  function resetGameAndCloseHandler() {
    setAreaArray(generateArea(areaSize))
    setIsOpenModalWindow(false)
    setWinner(null)
  }
  function resetGameHandler() {
    setAreaArray(generateArea(areaSize))
  }

  function cellHandler(rowIndex, cellIndex) {
    if(areaArray[rowIndex][cellIndex] !== '-') return

    areaArray[rowIndex][cellIndex] = nextPlayerStep
    setAreaArray((prev) => {
      let newState = [...prev]
      newState[rowIndex] = [...prev[rowIndex]]
      newState[rowIndex][cellIndex] = nextPlayerStep ? 'x' : '0'
      return newState
    })
    setNextPlayerStep((prev) => !prev)
  }


  return (
    <div className={styles.app}>
      <SettingsHeader setAreaSize={setAreaSize}
                      areaSize={areaSize}
                      resetGameHandler={resetGameHandler}
      />
      {
        isOpenModalWindow &&
        winner &&
        <ModalWindow winner={winner}
                     resetGameAndCloseHandler={resetGameAndCloseHandler}
        />
      }
      <PlayArea areaArray={areaArray}
                setAreaArray={setAreaArray}
                areaSize={areaSize}
                setWinner={setWinner}
                setIsOpenModalWindow={setIsOpenModalWindow}
                cellHandler={cellHandler}
      />
    </div>
  );
}

export default App
