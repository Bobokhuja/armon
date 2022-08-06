import classes from './Layout.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'
import { useState } from 'react'

function Layout() {
  const location = useLocation()

  return (
    <div className={classes.Layout}>
      <Header mainPage={location.pathname === '/'} />
      <Outlet />
    </div>
  )
}

export default Layout