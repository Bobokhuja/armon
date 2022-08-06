import classes from './Header.module.scss'
import Logo from '../../Logo/Logo'

function Header() {
  return (
    <header className={classes.Header}>
      <Logo />
    </header>
  )
}

export default Header