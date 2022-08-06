import classes from './Layout.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'
import ModalRequest from '../modals/ModalRequest/ModalRequest'
import { useContext } from 'react'
import { ModalRequestContext } from '../modals/ModalRequest/context/ModalRequestContext'
import { CSSTransition } from 'react-transition-group'
import Footer from './Footer/Footer'

function Layout() {
  const location = useLocation()
  const requestModal = useContext(ModalRequestContext)

  return (
    <div className={classes.Layout}>
      <Header mainPage={location.pathname === '/'} />
      <main className={classes.Main}>
        <Outlet />
      </main>
      <Footer />

      <CSSTransition
        in={requestModal.isShow}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: classes.EnterActive,
          exitActive: classes.ExitActive
        }}
      >
        <ModalRequest />
      </CSSTransition>
    </div>
  )
}

export default Layout