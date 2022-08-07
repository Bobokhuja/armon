import classes from './Header.module.scss'
import Logo from '../../Logo/Logo'
import Navigation from '../../Navigation/Navigation'
import Burger from '../../UI/Burger/Burger'
import { useState } from 'react'
import NavigationMobile from '../../Navigation/NavigationMobile/NavigationMobile'
import { CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'

function Header({mainPage = false}: { mainPage?: boolean }) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
  const [isMobile] = useState(window.screen.availWidth < 992)

  const cls = [
    classes.Header,
    mainPage ? classes.MainHeader : ''
  ]
  return (
    <header className={cls.join(' ')}>
      <div className={classes.Wrapper}>
        <Logo/>

        {!isMobile && (<Navigation/>)}
        <CSSTransition
          in={isShowMenu}
          timeout={500}
          unmountOnExit
          mountOnEnter
          classNames={{
            enterActive: classes.EnterActive,
            exitActive: classes.ExitActive
          }}
        >
          <NavigationMobile />
        </CSSTransition>
        <Burger
          className={classes.Burger}
          onClick={() => setIsShowMenu(prevState => !prevState)}
          isActive={isShowMenu}
        />
      </div>
    </header>
  )
}

export default Header