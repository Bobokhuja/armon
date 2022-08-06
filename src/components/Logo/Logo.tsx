import classes from './Logo.module.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

function Logo() {
  return (
    <Link
      to="/"
      className={classes.LogoLink}
    >
      <img
        className={classes.Logo}
        src={logo}
        alt="Armon"
      />
    </Link>
  )
}

export default Logo