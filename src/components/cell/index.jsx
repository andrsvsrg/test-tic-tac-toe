import  styles  from './styled.module.scss'

import cross from '../../assets/cross.svg'
import zero from '../../assets/zero.svg'
function Cell({cell, onClickHandler}) {

  const content = {
    'x': cross,
    '0': zero,
  }

  return (
    <div onClick={onClickHandler} className={styles.cellWrapper}>
      {
        cell !== '-' && <img src={content[cell]} alt={cell} width={'95%'} height={'95%'}/>
      }
    </div>
  )
}

export default Cell