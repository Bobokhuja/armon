import classes from './Backdrop.module.scss'

function Backdrop({onClick}: {onClick: () => void}) {
  return (
    <div className={classes.Backdrop} onClick={onClick} />
  )
}

export default Backdrop