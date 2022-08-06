import classes from './Header.module.scss'
import Logo from '../../Logo/Logo'

function Header({mainPage = false}: {mainPage?: boolean}) {
  const cls = [
    classes.Header,
    mainPage ? classes.MainHeader : ''
  ]
  return (
    <header className={cls.join(' ')}>
      <div className={classes.Wrapper}>
        <Logo />
      </div>
    </header>
  )
}

export default Header