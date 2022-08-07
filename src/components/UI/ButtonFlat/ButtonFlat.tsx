import classes from './ButtonFlat.module.scss'
import { ReactNode } from 'react'

interface IButtonFlat {
  children: ReactNode
  onClick?: () => void
}

function ButtonFlat({children, onClick}: IButtonFlat) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classes.Button}
    >
      {children}
    </button>
  )
}

export default ButtonFlat