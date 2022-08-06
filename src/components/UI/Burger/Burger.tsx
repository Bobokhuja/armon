import classes from './Burger.module.scss'

interface IBurger {
  onClick: () => void
  isActive: boolean
  className: string
}

function Burger({onClick, isActive, className}: IBurger) {
  const cls = [
    classes.Burger,
    className ? className : '',
    isActive && classes.Active
  ]
  return (
    <button
      type="button"
      onClick={onClick}
      className={cls.join(' ')}
    >
      <span></span>
    </button>
  )
}

export default Burger