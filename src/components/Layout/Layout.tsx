import classes from './Layout.module.scss'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className={classes.Layout}>
      <Outlet />
    </div>
  )
}

export default Layout