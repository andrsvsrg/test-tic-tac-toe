import styles from './btn.module.scss'
function ResetButton({ onClick, children, ...props }) {
  return (
    <button className={styles.resetButton} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default ResetButton