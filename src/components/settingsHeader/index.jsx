import styles from './styled.module.scss'
import ResetButton from '../resetButton/index.jsx'

function SettingsHeader({setAreaSize, areaSize, resetGameHandler}) {

  function areaSizeHandler(e) {
    const value = +e.target.value

    if (!isNaN(value) && value >= 3 && value <= 10) {
      setAreaSize(value)
    }
  }

  return (
    <div className={styles.settingsWrapper}>
      <h3>Current area size — {areaSize}</h3>
      <div>
        Change area size
        <input type="number"
               className={styles.customInput}
               min="3"
               max="10"
               value={areaSize}
               onChange={areaSizeHandler}
        />
      </div>


      <ResetButton onClick={resetGameHandler}>Reset game</ResetButton>
    </div>
  )
}

export default SettingsHeader