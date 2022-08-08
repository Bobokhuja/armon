import classes from './ButtonMore.module.scss'
import { ReactNode } from 'react'

interface IButtonMore {
  onClick?: () => void
  children: ReactNode
  className?: string
}

function ButtonMore({onClick, children, className}: IButtonMore) {
  return (
    <button
      type="button"
      className={`${className ? className : ''} ${classes.ButtonMore}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonMore