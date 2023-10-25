import  styles  from './styled.module.scss'

import { useEffect } from 'react'

import { checkWinner, generateArea } from '../../helpers/helpers.js'

import Cell from '../cell/index.jsx'
function PlayArea({cellHandler, areaArray, setAreaArray, areaSize, setWinner, setIsOpenModalWindow}) {

  useEffect(() => {
    setAreaArray(generateArea(areaSize))
  }, [areaSize])

  useEffect(() => {
    const winner = checkWinner(areaArray)
    if(winner) {
      setWinner(winner)
      setIsOpenModalWindow(true)
    }
  }, [areaArray])


  return (
    <div className={styles.areaWrapper}>
      {
        areaArray.map((row, rowIndex) => {
          return <div className={styles.rowWrapper} key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return <Cell key={cellIndex} onClickHandler={() => cellHandler(rowIndex, cellIndex)}  cell={cell}/>
            })}
          </div>
        })
      }
    </div>
  )
}

export default PlayArea