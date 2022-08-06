import classes from './Logo.module.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import logoFooter from '../../assets/img/logo-footer.svg'

function Logo({footerMode = false}) {
  const cls = [
    classes.Logo,
    footerMode ? classes.FooterLogo : ''
  ]
  return (
    <Link
      to="/"
      className={classes.LogoLink}
    >
      <img
        className={cls.join(' ')}
        src={footerMode ? logoFooter : logo}
        alt="Armon"
      />
    </Link>
  )
}

export default Logo